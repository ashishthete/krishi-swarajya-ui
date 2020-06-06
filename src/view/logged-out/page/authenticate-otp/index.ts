import { em, percent } from 'csx';
import { Dispatch, h } from 'futura-dom';
import { style } from 'typestyle';

import { AuthenticateOTP, Loaded } from 'app/state/logged-out/page/authenticate-otp';

import { view as form } from './form';

export const view = (state: AuthenticateOTP, dispatch: Dispatch) =>
  h(`div.${styles.container}`, form(state as Loaded, dispatch));

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
}
