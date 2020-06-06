import { em } from 'csx';
import { h } from 'futura-dom';
import { style } from 'typestyle';

import * as color from 'app/lib/view/color';

export const error = (message: string) =>
  h(`div.${styles.error}`, message);

// Styles

namespace styles {
  export const error = style({
    color: color.darkTerraCotta.toString(),
    margin: `${em(0.5)} 0`,
    minHeight: em(1)
  });

}
