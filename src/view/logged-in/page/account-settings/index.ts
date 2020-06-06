import { em } from 'csx';
import { Dispatch, h } from 'futura-dom';
import { style } from 'typestyle';

import { messages } from 'app/locales';
import { AccountSettings } from 'app/state/logged-in/page/account-settings';

import { view as page } from '../_layout/page';
import { view as section } from '../_layout/section';

import { view as password } from './password';

const _ = messages.loggedIn.page.accountSettings;

export const view = (state: AccountSettings, dispatch: Dispatch) =>
  page({
    header: [
      _.title
    ],
    content: content(state as any, dispatch)
  });

const content = (state: AccountSettings, dispatch: Dispatch) =>
  section({
    title: _.password.form.title,
    description: _.password.form.description,
    content: h(`div.${styles.content}`, [
      password(state.password, dispatch)
    ])
  });

// Styles

namespace styles {
  export const content = style({
    maxWidth: em(20)
  });
}
