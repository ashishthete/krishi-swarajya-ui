import { Dispatch } from 'futura-dom';

import { link } from 'app/lib/view/link';
import { messages } from 'app/locales';
import { CropList, Loaded, Loading } from 'app/state/logged-in/page/crop-list';

import { view as loading } from '../_layout/loading';
import { view as page } from '../_layout/page';

import { view as groups } from './groups';
// import { view as crops } from './crops';

const _ = messages.loggedIn.page.cropList;

export const view = (state: CropList, dispatch: Dispatch) =>
  page({
    header: [
      link({ label: _.title.crops, path: [ 'crops' ] })
    ],
    content: loading(state instanceof Loading, () =>
      content(state as any, dispatch))
  });

const content = (state: Loaded, dispatch: Dispatch) => {
  return groups(state, dispatch);
};
