import { Dispatch } from 'futura-dom';

import { messages } from 'app/locales';

import { Page } from 'app/state/logged-in/page';

import { AccountSettings } from 'app/state/logged-in/page/account-settings';
import { CropList } from 'app/state/logged-in/page/crop-list';
import { ErrorShow } from 'app/state/logged-in/page/error-show';
import { PostList } from 'app/state/logged-in/page/post-list';

import { view as accountSettings } from './account-settings';
import { view as cropList } from './crop-list';
import { view as errorShow } from './error-show';
import { view as postList } from './post-list';

export const view = (state: Page, dispatch: Dispatch) =>
  page(state, dispatch);

const page = (state: Page, dispatch: Dispatch) => {
  /* tslint:disable:curly */
  if (state instanceof AccountSettings) return accountSettings(state, dispatch);
  if (state instanceof ErrorShow) return errorShow(state.title, state.message);
  // FIXME: CropShow should be after CropList.
  // but currently facing "TS2358: The left-hand side of an 'instanceof' expression must be of type 'any', an object type or a type parameter." issue.
  if (state instanceof CropList) return cropList(state, dispatch);
  if (state instanceof PostList) return postList(state, dispatch);

  return errorShow(messages.error.title, messages.loggedIn.error.notImplemented);
};
