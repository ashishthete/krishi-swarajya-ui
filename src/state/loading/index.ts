import { on } from 'app/lib/state';
import { Services } from 'app/services';
import { AuthWithoutTwoFactor } from 'app/services/krishi/model/authentication';
import { enter as loggedIn } from 'app/state/logged-in';
import { enter as loggedOut } from 'app/state/logged-out';

// State

export class Loading {
  public static enter = (services: Services) => {
    const token = services.storage.token.load();
    if (token) {
      services.krishi.authenticateWithToken(token, AuthOk, AuthError);
      return new Loading();
    } else {
      return loggedOut(services);
    }
  }

  public transitions = (services: Services) => [
    on(AuthOk, (ok) => {
      services.storage.token.store(ok.auth.token);
      return loggedIn(ok.auth.account, services);
    }),
    on(AuthError, (error) => {
      if (error.code === 403) {
        services.storage.token.erase();
      }
      return loggedOut(services);
    })
  ]
}

export const enter = Loading.enter;

// Events

export type Message = AuthOk | AuthError;

class AuthOk {
  constructor(
    public readonly auth: AuthWithoutTwoFactor
  ) {}
}

class AuthError {
  constructor(
    public readonly code: number
  ) {}
}
