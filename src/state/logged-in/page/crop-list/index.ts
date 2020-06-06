import { Services } from 'app/services';
import { Account } from 'app/services/krishi/model';

import { LoadedMessage } from './loaded';
import { Loading, LoadingMessage } from './loading';

// State

export function enter(account: Account, services: Services) {
  return Loading.enter(account, services);
}

// Types

export { Account, Crop } from 'app/services/krishi/model';

export { CropList } from './base';
export { Loading } from './loading';
export { Filter, Loaded, LoadedMessage } from './loaded';

export type CropListMessage
  = LoadedMessage
  | LoadingMessage;
