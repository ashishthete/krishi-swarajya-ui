import { on, Record } from 'app/lib/state';
import { messages } from 'app/locales';
import { Services } from 'app/services';
import { AuthWithoutTwoFactor, AuthWithTwoFactor, TwoFactorAuthRequire } from 'app/services/krishi/model/authentication';

import { enter as authenticateOTP } from '../authenticate-otp';

import { enter as loggedIn } from 'app/state/logged-in';
import { AuthenticateCredential } from './base';

const _ = messages.loggedOut.authenticateCredential.error;

// State

export class Loaded extends Record<Data>(AuthenticateCredential) {
  public static enter = (services: Services) => {
    return new Loaded({
      username: '',
      password: '',
      error: '',
      loggingIn: false
    });
  }

  public transitions = (services: Services) => [
    on(Update, (update) => {
      return this.update({ ...update.updates, error: '' });
    }),
    on(LogIn, (logIn) => {
      const twoFactorToken = services.storage.twoFactorToken.load();
      twoFactorToken
      ? services.krishi.authenticateWithTwoFactorToken(this.username, this.password, twoFactorToken, AuthWithTwoFactorOK, AuthError)
      : services.krishi.authenticate(this.username, this.password, AuthOk, AuthError);
      return this.update({ loggingIn: true });
    }),
    on(AuthOk, (ok) => {
      if (ok.auth) {
        services.storage.token.store(ok.auth.token);
        services.storage.twoFactorToken.erase();
        return loggedIn(ok.auth.account, services);
      } else if (ok.twoFactorAuthRequire) {
        return authenticateOTP(
          this.username,
          this.password,
          ok.twoFactorAuthRequire.via,
          ok.twoFactorAuthRequire.on
        );
      } else {
        return this;
      }
    }),
    on(AuthWithTwoFactorOK, (ok) => {
      if (ok.auth) {
        if (ok.auth.two_factor_token) {
          services.storage.twoFactorToken.store(ok.auth.two_factor_token);
        } else {
          services.storage.twoFactorToken.erase();
        }
        services.storage.token.store(ok.auth.token);
        return loggedIn(ok.auth.account, services);
      } else if (ok.twoFactorAuthRequire) {
        services.storage.twoFactorToken.erase();
        return authenticateOTP(
          this.username,
          this.password,
          ok.twoFactorAuthRequire.via,
          ok.twoFactorAuthRequire.on
        );
      } else {
        return this;
      }
    }),
    on(AuthError, (error) => {
      return this.update({ loggingIn: false, error: error.message });
    })
  ]
}

interface Data {
  username: string;
  password: string;
  error: string;
  loggingIn: boolean;
}

// Message

export type LoadedMessage = ChooseAnotherOrg | Update | LogIn | AuthOk | AuthError;

export class Update {
  constructor(
    readonly updates: {
      username?: string,
      password?: string
    }
  ) {}
}

export class ChooseAnotherOrg {}

export class LogIn {}

class AuthOk {
  constructor(
    public readonly auth: AuthWithoutTwoFactor,
    public readonly twoFactorAuthRequire?: TwoFactorAuthRequire
  ) {}
}

class AuthWithTwoFactorOK {
  constructor(
    public readonly auth: AuthWithTwoFactor | AuthWithoutTwoFactor,
    public readonly twoFactorAuthRequire?: TwoFactorAuthRequire
  ) {}
}

class AuthError {
  constructor(
    public readonly code: number
  ) {}

  get message() {
    switch (this.code) {
      case 403:
        return _.incorrectCredentials;
      default:
        return _.other;
    }
  }
}
