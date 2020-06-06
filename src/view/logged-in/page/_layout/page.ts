import { em, percent } from 'csx';
import { h, VNode } from 'futura-dom';
import { style } from 'typestyle';

export const view = (options: Options) =>
  h(`div.${styles.container}`, [
    h(`div.${styles.header.container}`, header(options.header)),
    h(`div.${styles.content}`, [ options.content ])
  ]);

const header = (segments: ReadonlyArray<string | VNode>) =>
  segments.reduce((acc, segment, index) => {
    if (index < segments.length - 1) {
      return acc.concat([ segment, ' / ' ]);
    } else {
      if (acc.length > 0) {
        return [ h(`span.${styles.header.prefix}`, acc), segment ];
      } else {
        return [ segment ];
      }
    }
  }, []);

// Types

interface Options {
  header: ReadonlyArray<string | VNode>;
  content: VNode;
}

// Styles

namespace styles {
  export const container = style({
    display: 'flex',
    flexDirection: 'column',
    height: percent(100),
    overflowY: 'auto'
  });

  export namespace header {
    export const container = style({
      $nest: {
        '& a': {
          outline: 'none',
          textDecoration: 'none'
        }
      },
      fontSize: em(20 / 16),
      flexGrow: 0,
      flexShrink: 0,
      padding: em(2 * 16 / 20),
      textTransform: 'uppercase'
    });

    export const prefix = style({
      opacity: 0.5
    });
  }

  export const content = style({
    padding: `0 ${em(2)} ${em(2)} ${em(2)}`
  });
}
