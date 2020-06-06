import { em } from 'csx';
import { h, VNode } from 'futura-dom';
import { style } from 'typestyle';

import * as color from 'app/lib/view/color';
import * as font from 'app/lib/view/font';

export const view = ({ title, description = '', content }: Options) =>
  h(`div.${styles.container}`, [
    h(`div.${styles.header.container}`, [
      h(`div.${styles.header.title}`, [ title ]),
      h(`div.${styles.header.description}`, [ description ])
    ]),
    h(`div.${styles.content}`, [ content ])
  ]);

// Types

interface Options {
  title: string;
  description?: string;
  content: VNode;
}

// Styles

namespace styles {
  export const container = style({
    $nest: {
      '& + &': {
        marginTop: em(2)
      }
    },
    backgroundColor: color.white.toString(),
    borderRadius: em(2 / 16),
    boxShadow: `0 ${em(1 / 16)} ${em(2 / 16)} ${color.gunMetal.fade(0.05)}`,
    padding: em(2)
  });

  export namespace header {
    export const container = style({
      marginBottom: em(2)
    });

    export const title = style({
      fontSize: em(20 / 16),
      fontWeight: font.weight.medium,
      marginBottom: em(0.5)
    });

    export const description = style({
      color: color.metallicSeaweed.toString(),
      marginBottom: em(0.5),
      maxWidth: em(40)
    });
  }

  export const content = style({
    paddingBottom: em(1)
  });
}
