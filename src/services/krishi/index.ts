import { Dispatch } from 'futura-dom';

import { decode  as accountDecoder } from 'app/services/krishi/resource/accounts/account';
import { Client } from './client';
import { AuthWithoutTwoFactor, AuthWithTwoFactor, TwoFactorAuthRequire } from './model/authentication';
import { Accounts } from './resource';

const TOKEN_REFRESH_TIMEOUT = 30 * 60; // 30 minutes
const RETRY_TOKEN_REFRESH_TIMEOUT = 5 * 60; //  5 minutes

export class Krishi {
  public readonly accounts: Accounts;

  private readonly client: Client;
  private readonly dispatch: Dispatch;
  private timer: TimerRef | null;

  constructor(url: string, dispatch: Dispatch) {
    this.client = new Client(url, undefined);
    this.dispatch = dispatch;

    this.accounts = new Accounts(this.client, dispatch, '/accounts');
    this.timer = null;
  }

  public getToken = () => {
    return this.client.token;
  }

  public async authenticate<OkMessage, ErrorMessage>(
    username: string,
    password: string,
    Ok: AuthOk<OkMessage>,
    Error: AuthError<ErrorMessage>
  ) {
    try {
      // const data = await this.client.post('/accounts/token', {
      //   body: {
      //     username,
      //     password
      //   }
      // });
      const data = {
        two_factor: undefined,
        auth: {
          token: '1234',
          account: {
            id: 1,
            name: 'Ashish'
          }
        }
      };

      if (data.auth) {
        this.client.token = data.auth.token;
        this.timer = new Timer().start(TOKEN_REFRESH_TIMEOUT * 1000, () => this.refreshToken());
      }

      this.dispatch(
        new Ok(
          data.auth ? {...data.auth, account: accountDecoder(data.auth.account)} : undefined,
          data.two_factor ? data.two_factor : undefined
        )
      );
    } catch (error) {
      this.dispatch(new Error(error.code));
    }
  }

  public async authenticateWithToken<OkMessage, ErrorMessage>(
    token: string,
    Ok: AuthOk<OkMessage>,
    Error: AuthError<ErrorMessage>
  ) {
    try {
      const data = await this.client.post('/accounts/token', {
        body: {
          token
        }
      });

      if (data.auth) {
        this.client.token = data.auth.token;
        this.timer = new Timer().start(TOKEN_REFRESH_TIMEOUT * 1000, () => this.refreshToken());
      }

      this.dispatch(
        new Ok(
          data.auth ? {...data.auth, account: accountDecoder(data.auth.account)} : undefined,
          data.two_factor ? data.two_factor : undefined
        )
      );
    } catch (error) {
      this.dispatch(new Error(error.code));
    }
  }

  public async authenticateOTP<OkMessage, ErrorMessage>(
    username: string,
    password: string,
    otp: string,
    Ok: AuthWithTwoFactorTokenOk<OkMessage>,
    Error: AuthError<ErrorMessage>
  ) {
    try {
      const data = await this.client.post('/accounts/token', {
        body: {
          username,
          password,
          otp
        }
      });

      if (data.auth) {
        this.client.token = data.auth.token;
        this.timer = new Timer().start(TOKEN_REFRESH_TIMEOUT * 1000, () => this.refreshToken());
      }

      this.dispatch(
        new Ok(
          data.auth ? data.auth : undefined,
          data.two_factor ? data.two_factor : undefined
        )
      );
    } catch (error) {
      this.dispatch(new Error(error.code));
    }
  }

  public async authenticateWithTwoFactorToken<OkMessage, ErrorMessage>(
    username: string,
    password: string,
    twoFactorToken: string,
    Ok: AuthWithTwoFactorTokenOk<OkMessage>,
    Error: AuthError<ErrorMessage>
  ) {
    try {
      const data = await this.client.post('/accounts/token', {
        body: {
          username,
          password,
          two_factor_token: twoFactorToken
        }
      });

      if (data.auth) {
        this.client.token = data.auth.token;
        this.timer = new Timer().start(TOKEN_REFRESH_TIMEOUT * 1000, () => this.refreshToken());
      }

      this.dispatch(
        new Ok(
          data.auth ? data.auth : undefined,
          data.two_factor ? data.two_factor : undefined
        )
      );
    } catch (error) {
      this.dispatch(new Error(error.code));
    }
  }

  public deauthenticate() {
    this.client.token = undefined;
    if (this.timer) {
      this.timer.cancel();
      this.timer = null;
    }
  }

  private async refreshToken() {
    try {
      const data = await this.client.post('/accounts/token', {
        body: {
          token: this.client.token
        }
      });

      if (data.auth) {
        this.client.token = data.auth.token;
      }
      this.timer = new Timer().start(TOKEN_REFRESH_TIMEOUT * 1000, () => this.refreshToken());
    } catch (error) {
      this.timer = new Timer().start(RETRY_TOKEN_REFRESH_TIMEOUT * 1000, () => this.refreshToken());
    }
  }
}

// Types

interface AuthOk<T> {
  new(auth?: AuthWithoutTwoFactor, twoFactor?: TwoFactorAuthRequire): T;
}

interface AuthWithTwoFactorTokenOk<T> {
  new(auth: AuthWithTwoFactor | AuthWithoutTwoFactor, twoFactor?: TwoFactorAuthRequire): T;
}

interface AuthError<T> {
  new(code: number): T;
}

// Helper

class Timer {

  public start(delay: number, callback, ...args) {
    return new TimerRef(delay, () => {
      callback(...args);
    });
  }
}

class TimerRef {
  private readonly timerId: number;

  constructor(delay: number, callback: () => void) {
    this.timerId = window.setTimeout(callback, delay);
  }

  public cancel() {
    window.clearTimeout(this.timerId);
  }
}
