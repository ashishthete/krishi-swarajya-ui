import { Dispatch, h } from 'futura-dom';

import { App, Message } from 'app/state';
import { Error } from 'app/state/error';
import { Loading } from 'app/state/loading';
import { LoggedIn } from 'app/state/logged-in';
import { LoggedOut } from 'app/state/logged-out';

import { view as error } from './error';
import { view as loading } from './loading';
import { view as loggedIn } from './logged-in';
import { view as loggedOut } from './logged-out';

// View

export const view = ({ state }: App, dispatch: Dispatch<Message>) => {
  if (state instanceof Error) {
    return error(state.title, state.message);
  } else if (state instanceof Loading) {
    return loading(state);
  } else if (state instanceof LoggedIn) {
    return loggedIn(state, dispatch);
  } else if (state instanceof LoggedOut) {
    return loggedOut(state, dispatch);
  } else {
    return h(`div`, `NOT IMPLEMENTED`);
  }
};
