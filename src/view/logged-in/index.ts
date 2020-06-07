import { em, percent } from 'csx';
import { Dispatch, h } from 'futura-dom';
import { media, style, types } from 'typestyle';

import * as color from 'app/lib/view/color';
import { logo } from 'app/lib/view/logo';
import { LoggedIn, ToggleMenu } from 'app/state/logged-in';
import { UserActivity } from 'app/state/logged-in/auto-logout';

import { view as autoLogout } from './auto-logout';
import { view as menu } from './menu';
import { view as page } from './page';

// View

export const view = (state: LoggedIn, dispatch: Dispatch) =>
  h(`div.${styles.container}`, {
    on: {
      click: onUserActivity(dispatch),
      dblclick: onUserActivity(dispatch),
      keypress: onUserActivity(dispatch),
      mousemove: onUserActivity(dispatch),
      scroll: onUserActivity(dispatch),
      touchmove: onUserActivity(dispatch),
      touchstart: onUserActivity(dispatch)
    }
  }, [
    content(state, dispatch),
    state.autoLogout ? autoLogout(state.autoLogout, dispatch) : null
  ]);

const content = (state: LoggedIn, dispatch: Dispatch) =>
  h(`div`, {
    attrs: {
      class: state.autoLogout && state.autoLogout.showWarning
        ? styles.content.blurred
        : styles.content.normal
    }
  }, [
    h(`div`, {
      attrs: {
        class: state.menu
          ? styles.menu.expandedMenu
          : styles.menu.normalMenu
      }
    }, [ menu(state, dispatch) ]),
    h(`div`, {
      attrs: {
        class: state.menu
          ? styles.page.expandedMenu
          : styles.page.normalMenu
      },
      on: {
        click: this.menu ? onToggleMenu(dispatch) : undefined
      }
    }, [
      header(state, dispatch),
      h(`div.${styles.page.content}`, [
        page(state.page, dispatch)
      ])
    ])
  ]);

const header = (state: LoggedIn, dispatch: Dispatch) =>
  h(`div.${styles.page.header.container}`, [
    h(`svg`, {
      attrs: {
        class: styles.page.header.menu,
        viewBox: '0 0 24 24'
      },
      on: {
        click: onToggleMenu(dispatch)
      }
    }, [
      h(`path`, {
        attrs: {
          fill: 'currentColor',
          d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'
        }
      })
    ]),
    logo(styles.page.header.logo)
  ]);

// Messages

const onToggleMenu = (dispatch: Dispatch) => (event) =>
  dispatch(new ToggleMenu());

const onUserActivity = (dispatch: Dispatch) => (event) =>
  dispatch(new UserActivity());

// Styles

namespace styles {
  const VIEWPORT_SLIDING_MENU = { maxWidth: em(1023 / 16) };
  const VIEWPORT_NORMAL_MENU = { minWidth: em(1024 / 16) };

  export const container = style({
    height: percent(100),
    position: 'relative',
    width: percent(100)
  });

  export namespace content {
    const common: types.NestedCSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      width: percent(100)
    };

    export const normal = style(common);

    export const blurred = style(common, {
      filter: 'blur(10px)'
    });
  }

  export namespace menu {
    const common: types.NestedCSSProperties = {
      backgroundColor: `${color.white}`,
      boxShadow: `${em(1 / 16)} 0 ${em(2 / 16)} ${color.gunMetal.fade(0.1)}`,
      color: `${color.gunMetal}`,
      transform: `translateZ(0)`
    };

    const sliding: types.NestedCSSProperties = {
      bottom: 0,
      position: 'fixed',
      top: 0,
      transition: 'transform 400ms ease-in-out',
      width: percent(80),
      zIndex: 1
    };

    const normal: types.NestedCSSProperties = {
      flexShrink: 0,
      height: percent(100),
      minWidth: em(16)
    };

    export const normalMenu = style(
      common,
      media(VIEWPORT_NORMAL_MENU, normal),
      media(VIEWPORT_SLIDING_MENU, sliding, {
        transform: 'translateX(-100%)'
      })
    );

    export const expandedMenu = style(
      common,
      media(VIEWPORT_NORMAL_MENU, normal),
      media(VIEWPORT_SLIDING_MENU, sliding, {
        transform: 'translateX(0)'
      })
    );
  }

  export namespace page {
    const common: types.NestedCSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      height: percent(100),
      overflow: 'hidden'
    };

    export const normalMenu = style(common, media(VIEWPORT_SLIDING_MENU, {
      paddingTop: em(4),
      transition: 'transform 400ms ease-in-out'
    }));

    export const expandedMenu = style(common, media(VIEWPORT_SLIDING_MENU, {
      paddingTop: em(4),
      transform: 'translateX(80%)',
      transition: 'transform 400ms ease-in-out'
    }));

    export namespace header {
      export const container = style({
        backgroundColor: color.fieryRose.toHexString(),
        boxShadow: `0 ${em(1 / 16)} ${em(2 / 16)} ${color.gunMetal.fade(0.1)}`,
        color: color.white.toHexString(),
        padding: em(1),
        position: 'fixed',
        top: 0, right: 0, left: 0,
        zIndex: 1
      }, media(VIEWPORT_NORMAL_MENU, {
        display: 'none'
      }));

      export const menu = style({
        display: 'block',
        position: 'absolute',
        height: em(2),
        width: em(2)
      });

      export const logo = style({
        display: 'block',
        height: em(1),
        margin: `${em(0.5)} auto`
      });
    }

    export const content = style({
      flexGrow: 1,
      height: percent(100),
      overflowY: 'auto',
      zIndex: 0
    });
  }
}
