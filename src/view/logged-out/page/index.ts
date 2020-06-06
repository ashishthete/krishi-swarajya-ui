import { Dispatch } from 'futura-dom';

import { messages } from 'app/locales';

import { Page } from 'app/state/logged-out/page';
import { AuthenticateCredential } from 'app/state/logged-out/page/authenticate-credential';
import { AuthenticateOTP } from 'app/state/logged-out/page/authenticate-otp';

import { ErrorShow } from 'app/state/logged-out/page/error-show';

import { view as authenticateCredential } from './authenticate-credential';
import { view as authenticateOTP } from './authenticate-otp';
import { view as errorShow } from './error-show';

export const view = (state: Page, dispatch: Dispatch) =>
  page(state, dispatch);

const page = (state: Page, dispatch: Dispatch) => {
  /* tslint:disable:curly */
  if (state instanceof AuthenticateCredential) return authenticateCredential(state, dispatch);
  if (state instanceof ErrorShow) return errorShow(state.title, state.message);
  if (state instanceof AuthenticateOTP) return authenticateOTP(state, dispatch);

  return errorShow(messages.error.title, messages.loggedIn.error.notImplemented);
};
