import { em, percent } from 'csx';
import { Dispatch, h } from 'futura-dom';
import { media, style } from 'typestyle';

import * as color from 'app/lib/view/color';

import { Loaded } from 'app/state/logged-in/page/crop-list';

import { view as crop } from './crop';

export const view = (state: Loaded, dispatch: Dispatch) =>
  h(`ul.${styles.crops}`, [
    ...state.crops.map((p) =>
      h(`li.${styles.crop}`, { key: p.info.id }, crop(p))
    )
  ]);

// Styles

namespace styles {
  const spacing = em(2);

  export const crops = style({
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: `calc(${percent(100)} + ${spacing})`
  }, {
    listStyle: 'none',
    margin: 0,
    padding: 0
  });

  export const crop = style({
    height: '40vh',
    flexGrow: 1,
    backgroundColor: color.white.toString(),
    borderRadius: em(2 / 16),
    boxShadow: `0 ${em(1 / 16)} ${em(2 / 16)} ${color.gunMetal.fade(0.05)}`
  }, {
    flexGrow: 0,
    flexShrink: 0,
    marginBottom: spacing,
    overflow: 'hidden'
  }, media({ maxWidth: em(767 / 16) }, {
    flexBasis: `calc(${percent(100)} - ${spacing})`
  }), media({ minWidth: em(768 / 16), maxWidth: em(1279 / 16) }, {
    flexBasis: `calc(${percent(100 / 2)} - ${spacing})`,
    marginRight: spacing
  }), media({ minWidth: em(1280 / 16), maxWidth: em(1599 / 16) }, {
    flexBasis: `calc(${percent(100 / 3)} - ${spacing})`,
    marginRight: spacing
  }), media({ minWidth: em(1600 / 16) }, {
    flexBasis: `calc(${percent(100 / 4)} - ${spacing})`,
    marginRight: spacing
  }));
}
