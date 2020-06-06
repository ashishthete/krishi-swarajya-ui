import { Dispatch } from 'futura-dom';

import { Client } from 'app/services/krishi/client';
import { Account } from 'app/services/krishi/model';
import { list } from '../../../method';

export class Crops {
  public list = list(this.client, this.dispatch, this.path, decode);

  constructor(
    private readonly client: Client,
    private readonly dispatch: Dispatch,
    private readonly path: string
  ) {}
}

const decode = (json: any): Account.Crop => ({
  id: json.id,
  name: json.name,
  imageURL: json.imageURL
});
