import { Dispatch } from 'futura-dom';

import { Transitions } from 'app/lib/state';
import { Config, init as initServices, Services } from 'app/services';
import { enter as loading, Loading, Message as LoadingMessage } from './loading';
import { LoggedIn, Message as LoggedInMessage } from './logged-in';
import { LoggedOut, Message as LoggedOutMessage } from './logged-out';

// State

export const init = (config: Config) => (dispatch: Dispatch<Message>): App => {
  const services = initServices(config, dispatch);

  return { services, state: loading(services) };
};

export const update = ({ services, state }: App, message: Message): App => ({
  services,
  state: updateState(message, state, services)
});

// Helpers

const updateState = (message: Message, state: State, services: Services): State => {
  const transition = Transitions.match(message, state.transitions(services));
  try {
    return transition ? transition() : state;
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error('Transition failed with error: ', error);
    return state;
  }
};

// Types

export interface App {
  readonly services: Services;
  readonly state: State;
}

export type State = Loading | LoggedIn | LoggedOut;

export type Message = LoadingMessage | LoggedInMessage | LoggedOutMessage;
