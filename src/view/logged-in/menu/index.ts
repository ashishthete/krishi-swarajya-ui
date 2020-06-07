import { em, percent } from 'csx';
import { Dispatch, h  } from 'futura-dom';
import { media, style } from 'typestyle';

import { logo } from 'app/lib/view/logo';

import { LoggedIn, LogOut } from 'app/state/logged-in';

import { account } from './menu';

export const view = (state: LoggedIn, dispatch: Dispatch<LogOut>) =>
  h(`div.${styles.container}`, [
    logo(styles.logo),
    account(state.account, state.page, dispatch)
  ]);

// Styles

namespace styles {
  const VIEWPORT_SLIDING_MENU = { maxWidth: em(1023 / 16) };
  // const VIEWPORT_NORMAL_MENU = { minWidth: em(1024 / 16) };

  export const container = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: percent(100),
    padding: em(1)
  }, {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }, media(VIEWPORT_SLIDING_MENU, {
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }));

  export const logo = style({
    display: 'block',
    height: em(3)
  });

  export const header = style({
    flexGrow: 0,
    flexShrink: 0,
    marginBottom: em(2),
    padding: em(1)
  });

  export namespace menus {
    export const container = style({
    });
  }
}
