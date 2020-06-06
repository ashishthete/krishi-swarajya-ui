import { em } from 'csx';
import { h } from 'futura-dom';
import { style } from 'typestyle';

import * as color from 'app/lib/view/color';

// TODO: Change Color for message type
export const message = (message: string) =>
  h(`div.${styles.message}`, message);

// Styles

namespace styles {
  export const message = style({
    color: color.darkTerraCotta.toString(),
    margin: `${em(0.5)} 0`,
    minHeight: em(1)
  });

}
