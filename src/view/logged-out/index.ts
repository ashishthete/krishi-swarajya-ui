import { Dispatch } from 'futura-dom';

import { view as page } from './page';

import { LoggedOut } from 'app/state/logged-out';

export const view = (state: LoggedOut, dispatch: Dispatch) => page(state.page, dispatch);
