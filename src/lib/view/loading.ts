import { em, percent } from 'csx';
import { h } from 'futura-dom';
import { classes, keyframes, style } from 'typestyle';

export const loading = (options: Options = {}) =>
  h(`div.${styles.container}`, [
    h(`svg`, { attrs: { class: classes(styles.spinner, options.class), viewBox: '0 0 40 40' } }, [
      h(`circle`, {
        attrs: {
          stroke: 'currentColor',
          strokeWidth: 4,
          strokeLinecap: 'round',
          cx: 20, cy: 20, r: 18
        }
      })
    ]),
    h(`div.${styles.message}`, [ options.message ])
  ]);

// Types

interface Options {
  class?: string;
  message?: string;
}

// Styles

export namespace styles {
  const containerAnimation = keyframes({
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  });

  export const container = style({
    animation: `800ms ease-in-out 100ms both ${containerAnimation}`,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: percent(100),
    justifyContent: 'center',
    width: percent(100)
  });

  const spinnerAnimation = keyframes({
    '0%': {
      transform: 'rotate(0deg)',
      strokeDashoffset: [0.66 * 40]
    },
    '50%': {
      transform: 'rotate(720deg)',
      strokeDashoffset: [3.14 * 40]
    },
    '100%': {
      transform: 'rotate(1080deg)',
      strokeDashoffset: [0.66 * 40]
    }
  });

  export const spinner = style({
    animation: `2s linear infinite ${spinnerAnimation}`,
    fill: 'transparent',
    opacity: 0.8,
    strokeDasharray: [40 * 3.14],
    width: em(2)
  });

  export const message = style({
    marginTop: em(1)
  });
}
