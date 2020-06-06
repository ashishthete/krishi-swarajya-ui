import { em, percent } from 'csx';
import { h  } from 'futura-dom';
import { keyframes, style } from 'typestyle';

export const view = (title: string, message: string) =>
  h(`div.${styles.container}`, [
    h(`div.${styles.title}`, title),
    h(`div.${styles.message}`, message)
  ]);

namespace styles {
  export const container = style({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: percent(100)
  });

  export const title = style({
    fontSize: em(24 / 16),
    margin: `${em(0.5)} 0`,
    maxWidth: em(24),
    textAlign: 'center'
  });

  const messageAnimation = keyframes({
    '0%': {
      opacity: 0,
      transform: 'translateY(1em)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  });

  export const message = style({
    animationDuration: '400ms',
    animationName: messageAnimation,
    maxWidth: em(24),
    textAlign: 'center'
  });
}
