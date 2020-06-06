import { Record, Transitions } from 'app/lib/state';
import { Services } from 'app/services';

import { LoggedIn } from 'app/state/logged-in';

import { init as page, Page, PageMessage } from './page';

// State

export const enter = (services: Services) =>
  LoggedOut.enter(services);

export class LoggedOut extends Record<Data>() {
  public static enter = (services: Services) => {
    return new LoggedOut({
      page: page(services)
    });
  }

  public transitions = (services: Services) => [
    ...Transitions.map<PageMessage, LoggedOut | LoggedIn, Page>(this.page.transitions(services), (page) => {
      return page instanceof LoggedIn ? page : this.update({ page });
    })
  ]
}

interface Data {
  readonly page: Page;
}

// Messages

export type Message
  = PageMessage;
