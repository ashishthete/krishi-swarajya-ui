import { Dispatch } from 'futura-dom';

import { Client } from '../../client';
import { Account } from './account';

export class Accounts {

  public account = (id: string) =>
    new Account(
      this.client,
      this.dispatch,
      `${this.path}/${encodeURIComponent(id)}`
    )

  constructor(
    private readonly client: Client,
    private readonly dispatch: Dispatch,
    private readonly path: string
  ) {}
}
