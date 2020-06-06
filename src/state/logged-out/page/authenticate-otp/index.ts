import { Loaded } from './loaded';

// State

export const enter = (username: string, password: string, via: string, on: string) =>
  Loaded.enter(username, password, via, on);

// Types

export { AuthenticateOTP } from './base';
export { Loaded, LogIn, Update } from './loaded';

import { LoadedMessage } from './loaded';

export type Message
  = LoadedMessage;
