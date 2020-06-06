import { Services } from 'app/services';
import { Account } from 'app/services/krishi/model';

import { Loading, LoadingMessage } from './loading';

// State

export function enter(account: Account, services: Services) {
  return Loading.enter(account, services);
}

// Types

export { Account, Post } from 'app/services/krishi/model';

export { PostList } from './base';
export { Loading } from './loading';
export { Filter, Loaded } from './loaded';

export type PostListMessage
  = LoadingMessage;
