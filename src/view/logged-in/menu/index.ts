import { em, percent } from 'csx';
import { Dispatch, h  } from 'futura-dom';
import { style } from 'typestyle';

import { LoggedIn, LogOut } from 'app/state/logged-in';

import { view as header } from './header';
import { account } from './menu';

export const view = (state: LoggedIn, dispatch: Dispatch<LogOut>) =>
  h(`div.${styles.container}`, [
    h(`div.${styles.header}`, [ header() ]),
    h(`div.${styles.menus.container}`, [
      account(state.account, state.page, dispatch)
    ])
  ]);

// Styles

namespace styles {
  export const container = style({
    display: 'flex',
    flexDirection: 'column',
    height: percent(100),
    padding: em(1)
  }, {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  });

  export const header = style({
    flexGrow: 0,
    flexShrink: 0,
    marginBottom: em(2),
    padding: em(1)
  });

  export namespace menus {
    export const container = style({
      flexGrow: 1,
      overflowY: 'auto'
    });
  }
}
