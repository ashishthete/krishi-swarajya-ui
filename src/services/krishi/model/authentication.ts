import { Account } from './account';

export interface AuthWithoutTwoFactor {
  account: Account;
  token: string;
  two_factor_token?: string;
}

export interface AuthWithTwoFactor {
  account: Account;
  token: string;
  two_factor_token: string;
}

export interface TwoFactorAuthRequire {
  via: string;
  on: string;
}
