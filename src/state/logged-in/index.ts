import { on, Record, Transitions } from 'app/lib/state';
import { Services } from 'app/services';
import { Account } from 'app/services/krishi/model';
import { Updated as NavigationUpdated } from 'app/services/navigation';

import { enter as loggedOut, LoggedOut } from 'app/state/logged-out';

import { AutoLogout, enter as autoLogout, Message as AutoLogoutMessage } from './auto-logout';
import { init as page, Message as PageMessage, Page } from './page';

// State

export const enter = (account: Account, services: Services) =>
  LoggedIn.enter(account, services);

export class LoggedIn extends Record<Data>() {
  public static enter = (account: Account, services: Services) => {
    return new LoggedIn({
      autoLogout: account.sessionTimeout ? autoLogout(account.sessionTimeout, services) : undefined,
      menu: false,
      page: page(account, services),
      account
    });
  }

  public transitions = (services: Services) => [
    on(NavigationUpdated, (event) => {
      this.page.exit(services);
      return this.update({
        menu: false,
        page: page(this.account, services)
      });
    }),
    on(ToggleMenu, (event) => {
      return this.update({ menu: !this.menu });
    }),
    on(LogOut, (event) => {
      services.storage.twoFactorToken.erase();
      return logout(this, services);
    }),
    ...Transitions.map<AutoLogoutMessage, LoggedIn | LoggedOut, AutoLogout>(this.autoLogout ? this.autoLogout.transitions(services) : [], (autoLogout) => {
      return autoLogout.remaining <= 0
        ? logout(this, services)
        : this.update({ autoLogout });
    }),
    ...Transitions.map<PageMessage, LoggedIn, Page>(this.page.transitions(services), (page) => {
      return this.update({ page });
    })
  ]
}

interface Data {
  readonly autoLogout?: AutoLogout;
  readonly menu: boolean;
  readonly account: Account;
  readonly page: Page;
}

// Types

export { Account };

// Helpers

const logout = (state: Data, services: Services) => {
  services.krishi.deauthenticate();
  services.storage.token.erase();
  services.navigation.replacePath([]);
  if (state.autoLogout) {
    state.autoLogout.exit(services);
  }
  state.page.exit(services);

  return loggedOut(services);
};

// Messages

export type Message
  = AutoLogoutMessage
  | LogOut
  | ToggleMenu
  | PageMessage;

export class LogOut {}

export class ToggleMenu {}
