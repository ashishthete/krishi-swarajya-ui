import { em } from 'csx';
import { Dispatch, h, VNode  } from 'futura-dom';
import { style, types } from 'typestyle';

import * as color from 'app/lib/view/color';
import { weight } from 'app/lib/view/font';
import { line as icon } from 'app/lib/view/icon';
import { buttonLink, link } from 'app/lib/view/link';
import { messages } from 'app/locales';
import { Account, LogOut } from 'app/state/logged-in';
import * as page from 'app/state/logged-in/page';

const _ = messages.loggedIn.menu;

export const account = (account: Account, p: page.Page, dispatch: Dispatch<LogOut>) =>
  h(`nav.${styles.container}`, [
    h(`div.${styles.title}`, [ account.name ]),
    h(`ul.${styles.items}`, [
      menuItem(icon.users, _.account.feed, [ 'posts' ],
        p instanceof page.PostList),
      menuItem(icon.users, _.account.crops, [ 'crops' ],
        p instanceof page.CropList),
      menuItem(icon.cog, _.account.settings, [ 'settings' ],
        p instanceof page.AccountSettings),
      logout(icon.power, _.account.logOut, dispatch)
    ])
  ]);

const menuItem = (icon: (className?: string) => VNode, title: string, path: string[], selected = false) =>
  h(`li`, {
    attrs: { class: selected ? styles.item.selected : styles.item.normal }
  }, [
    icon(styles.item.icon),
    link({
      class: styles.item.link,
      label: title,
      path
    })
  ]);

const logout = (icon: (className?: string) => VNode, label: string, dispatch: Dispatch<LogOut>) =>
  h(`li`, {
    attrs: { class: styles.item.normal }
  }, [
    icon(styles.item.icon),
    buttonLink({
      class: styles.item.link,
      label,
      onClick: onLogOut(dispatch)
    })
  ]);

// Messages

const onLogOut = (dispatch: Dispatch<LogOut>) => (event: Event) =>
  dispatch(new LogOut());

// Styles

namespace styles {
  export const container = style({
    '$nest': {
      '& + &': {
        marginTop: em(3)
      }
    },
    'userSelect': 'none',
    '-webkit-user-select': 'none'
  });

  export const title = style({
    fontSize: em(14 / 16),
    fontWeight: weight.medium,
    padding: `0 ${em(16 / 14)}`,
    margin: `${em(16 / 14)} 0`,
    textTransform: 'uppercase'
  });

  export const items = style({
    listStyle: 'none',
    margin: 0,
    padding: 0
  });

  export namespace item {
    const container: types.NestedCSSProperties = {
      display: 'flex',
      lineHeight: em(24 / 16),
      marginBottom: em(0.5),
      padding: `${em(0.5)} ${em(1)}`,
      transition: 'color 400ms ease-in-out, background-color 200ms ease-in-out'
    };

    export const normal = style(container, {
      $nest: {
        '&:hover': {
          color: color.fieryRose.toString()
        }
      }
    });

    export const selected = style(container, {
      backgroundColor: color.fieryRose.toString(),
      borderRadius: em(4 / 16),
      color: color.white.toString()
    });

    export const icon = style({
      height: em(24 / 16),
      width: em(24 / 16),
      marginRight: em(0.5)
    });

    export const link = style({
      $nest: {
        '&:focus': {
          outline: 'none'
        }
      },
      textDecoration: 'none'
    });
  }
}
