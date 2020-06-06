import { em, percent } from 'csx';
import { h } from 'futura-dom';
import { style } from 'typestyle';

import { loading } from 'app/lib/view/loading';
import { Loading } from 'app/state/loading';

export const view = (state: Loading) =>
  h(`div.${styles.container}`, [
    loading()
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
}
