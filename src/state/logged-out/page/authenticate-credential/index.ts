import { Services } from 'app/services';

import { Loaded } from './loaded';

// State

export const enter = (services: Services) =>
  Loaded.enter(services);

// Types

export { AuthenticateCredential } from './base';
export { ChooseAnotherOrg, Loaded, LogIn, Update } from './loaded';

import { LoadedMessage } from './loaded';

export type Message
  = LoadedMessage;
