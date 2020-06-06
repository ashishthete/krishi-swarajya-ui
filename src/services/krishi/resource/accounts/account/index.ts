import { Dispatch } from 'futura-dom';

import { Client } from 'app/services/krishi/client';
import { Account as AccountModel } from 'app/services/krishi/model';
import { del, get, update } from '../../method';

import { Crops } from './crops';
import { Password } from './password';

export class Account {
  public get = get(this.client, this.dispatch, this.path, decode);

  public update = update(this.client, this.dispatch, this.path, decode);

  public delete = del(this.client, this.dispatch, this.path, decode);

  public get password() {
    return new Password(
      this.client,
      this.dispatch,
      `${this.path}/password`
    );
  }

  public get patients() {
    return new Crops(
      this.client,
      this.dispatch,
      `${this.path}/patients`
    );
  }

  constructor(
    private readonly client: Client,
    private readonly dispatch: Dispatch,
    private readonly path: string
  ) {}
}

export const decode = (json: any): AccountModel => ({
  id: json.id,
  name: json.name,
  username: json.username,
  role: json.role,
  sessionTimeout: json.session_timeout,
  twoFactorAuthentication: json.two_factor_authentication,
  phone: json.phone
});
