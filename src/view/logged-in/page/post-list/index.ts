import { em, percent } from 'csx';
import { Dispatch, h } from 'futura-dom';
import { style } from 'typestyle';

import * as color from 'app/lib/view/color';

import { link } from 'app/lib/view/link';
import { messages } from 'app/locales';
import { Loaded, Loading, PostList } from 'app/state/logged-in/page/post-list';

import { view as loading } from '../_layout/loading';
import { view as page } from '../_layout/page';

import { view as post } from './post';

const _ = messages.loggedIn.page.cropList;

export const view = (state: PostList, dispatch: Dispatch) =>
  page({
    header: [
      link({ label: _.title.crops, path: [ 'posts' ] })
    ],
    content: loading(state instanceof Loading, () =>
      content(state as any, dispatch))
  });

// const content = (state: Loaded, dispatch: Dispatch) => {
//   return h(`ul.${styles.group.crops}`, [
//     ...state.posts.map((p) =>
//       h(`li.${styles.group.crop}`, { key: p.info.id }, post(p))
//     )
//   ]);
// };

const content = (state: Loaded, dispatch: Dispatch) => {
  return h(`ul.${styles.group.crops}`, [
    ...state.posts.map((p) =>
      h(`li.${styles.group.crop}`, { key: p.info.id }, post(p))
    )
  ]);
};

// Styles

namespace styles {
  export namespace group {
    export const header = style({
      opacity: 0.5,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      paddingBottom: em(1)
    });

    export const crops = style({
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      width: percent(100),
      listStyle: 'none',
      margin: 0,
      padding: 0
    });

    export const crop = style({
      width: percent(100),
      marginBottom: em(2),
      backgroundColor: color.white.toString(),
      borderRadius: em(2 / 16),
      boxShadow: `0 ${em(1 / 16)} ${em(2 / 16)} ${color.gunMetal.fade(0.05)}`
    });
  }
}
