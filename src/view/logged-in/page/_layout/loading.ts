import { percent } from 'csx';
import { h, VNode } from 'futura-dom';
import { keyframes, style } from 'typestyle';

import { loading } from 'app/lib/view/loading';

export const view = (isLoading: boolean, loaded: () => VNode) =>
  isLoading
    ? h(`div.${styles.loading.container}`, loading())
    : h(`div.${styles.loaded.container}`, loaded());

// Styles

namespace styles {
  export namespace loading {
    export const container = style({
      height: percent(100)
    });
  }

  export namespace loaded {
    const animation = keyframes({
      '0%': {
        opacity: 0
      },
      '100%': {
        opacity: 1
      }
    });

    export const container = style({
      animation: `400ms ease-in-out both ${animation}`
    });
  }
}
