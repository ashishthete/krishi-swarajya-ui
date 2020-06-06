import { on, Record } from 'app/lib/state';
import { messages } from 'app/locales';
import { Services } from 'app/services';
import { AuthWithTwoFactor } from 'app/services/krishi/model/authentication';

import { enter as loggedIn } from 'app/state/logged-in';
import { AuthenticateOTP } from './base';

const _ = messages.loggedOut.authenticateOTP.error;

// State

export class Loaded extends Record<Data>(AuthenticateOTP) {
  public static enter = (username: string, password: string, via: string, on: string) => {
    return new Loaded({
      username,
      password,
      via,
      on,
      otp: '',
      error: '',
      loggingIn: false
    });
  }

  public transitions = (services: Services) => [
    on(Update, (update) => {
      return this.update({ ...update.updates, error: '' });
    }),
    on(LogIn, (logIn) => {
      services.krishi.authenticateOTP(
        this.username,
        this.password,
        this.otp,
        AuthWithTwoFactorOK,
        AuthError
      );
      return this.update({ loggingIn: true });
    }),
    on(AuthWithTwoFactorOK, (ok) => {
      services.storage.token.store(ok.auth.token);
      services.storage.twoFactorToken.store(ok.auth.two_factor_token);
      return loggedIn(ok.auth.account, services);
    }),
    on(AuthError, (error) => {
      return this.update({ loggingIn: false, error: error.message });
    })
  ]
}

interface Data {
  username: string;
  password: string;
  via: string;
  on: string;
  otp: string;
  error: string;
  loggingIn: boolean;
}

// Message

export type LoadedMessage = Update | LogIn | AuthWithTwoFactorOK | AuthError;

export class Update {
  constructor(
    readonly updates: {
      otp?: string
    }
  ) {}
}

export class LogIn {}

class AuthWithTwoFactorOK {
  constructor(
    public readonly auth: AuthWithTwoFactor
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
