import { Dispatch } from 'futura-dom';

import { Client, Error as ClientError } from 'app/services/krishi/client';
import { Empty, Result } from '../../method';

export class Password {
  constructor(
    private readonly client: Client,
    private readonly dispatch: Dispatch,
    private readonly path: string
  ) {}

  public async update<Context, OkMessage, ErrorMessage>(
    updates: Update,
    Ok: Empty<Context, OkMessage>,
    Error: Result<number, Context, ErrorMessage>,
    context?: Context
  ) {
    try {
      await this.client.post(this.path, { body: updates });
      this.dispatch(new Ok(context));
    } catch (e) {
      if (e instanceof ClientError) {
        this.dispatch(new Error(e.code, context));
      } else {
        throw e;
      }
    }
  }
}

interface Update {
  password: {
    new: string,
    current: string
  };
}
