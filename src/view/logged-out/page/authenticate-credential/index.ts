import { em, percent } from 'csx';
import { Dispatch, h } from 'futura-dom';
import { style } from 'typestyle';

import { logo } from 'app/lib/view/logo';

import { AuthenticateCredential, Loaded } from 'app/state/logged-out/page/authenticate-credential';

import { view as form } from './form';

export const view = (state: AuthenticateCredential, dispatch: Dispatch) =>
  h(`div.${styles.container}`, [
    logo(styles.logo),
    form(state as Loaded, dispatch)
  ]);

namespace styles {
  export const container = style({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: percent(100),
    justifyContent: 'center',
    overflow: 'auto',
    padding: em(2),
    width: percent(100)
  });
  export const logo = style({
    display: 'block',
    height: em(4)
  });
}
