import { em } from 'csx';
import { h } from 'futura-dom';
import { classes, style, types } from 'typestyle';

import * as color from 'app/lib/view/color';

export const label = (options: Options, text: string) =>
  h('div', {
    attrs: { class: classes(options.required ? styles.label.required : styles.label.normal, options.class) }
  }, [ text ]);

interface Options {
  class?: string;
  required?: boolean;
}

namespace styles {
  export namespace label {
    export const common: types.NestedCSSProperties = {
      fontVariant: 'small-caps',
      marginBottom: em(0.5),
      textTransform: 'lowercase'
    };

    export const normal = style(common);
    export const required = style(common, {
      $nest: {
        '&::after': {
          content: `'*'`,
          display: 'inline',
          paddingLeft: em(0.2),
          color: color.fieryRose.toHexString()
        }
      }
    });
  }
}
