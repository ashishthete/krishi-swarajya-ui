import { em, percent } from 'csx';
import { Dispatch, h } from 'futura-dom';
import { style } from 'typestyle';

import * as color from 'app/lib/view/color';
import { messages } from 'app/locales';
import { AutoLogout } from 'app/state/logged-in/auto-logout';

// View

export const view = (autoLogout: AutoLogout, dispatch: Dispatch) =>
  autoLogout.showWarning
    ? warning(autoLogout.remaining, dispatch)
    : null;

const warning = (remaining: number, dispatch: Dispatch) =>
  h(`div.${styles.container}`, [
    h(`div.${styles.title}`, messages.loggedIn.autoLogout.title),
    h(`div.${styles.message}`, messages.loggedIn.autoLogout.message(remaining))
  ]);

// Styles

namespace styles {
  export const container = style({
    position: 'absolute',
    top: 0, right: 0, bottom: 0, left: 0,
    backgroundColor: color.white.fade(0.95).toString()
  }, {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: percent(100)
  });

  export const title = style({
    fontSize: em(24 / 16),
    margin: `${em(0.5)} 0`,
    maxWidth: em(24),
    textAlign: 'center'
  });

  export const message = style({
    maxWidth: em(24),
    textAlign: 'center'
  });
}
