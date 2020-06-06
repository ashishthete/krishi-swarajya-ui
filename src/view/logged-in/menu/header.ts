import { em } from 'csx';
import { h  } from 'futura-dom';
import { style } from 'typestyle';

import { messages } from 'app/locales';

const _ = messages;

export const view = () =>
  h(`div`, [
    h(`div.${styles.logo}`, _.title)
  ]);

// Styles

namespace styles {
  export const logo = style({
    fontSize: em(20 / 16)
  });
}
