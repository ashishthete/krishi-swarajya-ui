import { em } from 'csx';
import { h } from 'futura-dom';
import { classes, style, types } from 'typestyle';

import { fieryRose, metallicSeaweed, white } from '../color';
import * as font from '../font';
import { focus as focusStyle } from './style/focus';

export namespace button {
  const style = (size?: Size) =>
    size === 'mini' ? styles.mini : styles.medium;

  export const normal = (options: ButtonOptions) =>
    button('button', style(options.size).normal, options);

  export const primary = (options: ButtonOptions) =>
    button('button', style(options.size).primary, options);

  export const negative = (options: ButtonOptions) =>
    button('button', style(options.size).negative, options);

  export const submit = (options: SubmitOptions) =>
    button('submit', style(options.size).primary, options);

  const button = (type: string, style: string, options: Options) =>
    h('button', {
      attrs: {
        class: classes(style, options.class),
        type
      },
      on: {
        click: options.onClick,
        mousedown: (event) => event.preventDefault()
      },
      props: {
        disabled: options.disabled
      }
    }, options.label);

  export namespace link {
    export const normal = (options: LinkOptions) =>
      link(style(options.size).normal, options);

    export const primary = (options: LinkOptions) =>
      link(style(options.size).primary, options);

    const link = (style: string, options: LinkOptions) =>
      h('a', {
        attrs: {
          class: classes(style, options.class),
          href: '/' + options.path.map(encodeURIComponent).join('/')
        },
        on: {
          mousedown: (event) => event.preventDefault()
        }
      }, options.label);
  }

}

type Size = 'mini' | 'medium';

interface ButtonOptions {
  class?: string;
  disabled?: boolean;
  size?: Size;
  label: string;

  onClick: (event: MouseEvent) => void;
}

interface SubmitOptions {
  class?: string;
  disabled?: boolean;
  size?: Size;
  label: string;
}

interface Options {
  class?: string;
  disabled?: boolean;
  size?: Size;
  label: string;

  onClick?: (event: MouseEvent) => void;
}

interface LinkOptions {
  class?: string;
  size?: Size;
  label: string;
  path: ReadonlyArray<string>;
}

export namespace styles {
  const common: types.NestedCSSProperties = {
    $nest: {
      '&:hover': {
        opacity: 1
      },
      '&:disabled': {
        cursor: 'not-allowed'
      }
    },
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: em(1 / 16),
    color: 'inherit',
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: font.weight.medium,
    opacity: 0.9,
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'all 400ms ease-in-out',
    userSelect: 'none'
  };

  const gradient = (start, end) =>
    `linear-gradient(to right, ${start}, ${end})`;

  export namespace mini {
    const mini: types.NestedCSSProperties = {
      $nest: {
        '&:disabled': {
          color: fieryRose.desaturate(1).toString()
        }
      },
      backgroundColor: 'transparent',
      borderColor: 'currentcolor',
      borderRadius: em(1),
      fontSize: em(12 / 16),
      padding: `${em(0.5)} ${em(1.5)}`
    };

    export const normal = style(common, mini, focusStyle, {
      color: fieryRose.desaturate(0.4).toString()
    });

    export const primary = style(common, mini, focusStyle, {
      color: fieryRose.toString()
    });

    export const negative = style(common, mini, focusStyle, {
      opacity: 0.5
    });
  }

  export namespace medium {
    const medium: types.NestedCSSProperties = {
      $nest: {
        '&:disabled': {
          background: gradient(fieryRose.desaturate(1), fieryRose.desaturate(1).spin(-15))
        }
      },
      borderRadius: em(2 / 16),
      padding: `${em(0.5)} ${em(1)}`
    };

    export const normal = style(common, medium, focusStyle, {
      background: gradient(metallicSeaweed.lighten(0.1), metallicSeaweed.lighten(0.1).spin(-25)),
      color: white.toString()
    });

    export const primary = style(common, medium, focusStyle, {
      background: gradient(fieryRose, fieryRose.spin(-25)),
      color: white.toString()
    });

    export const negative = style(common, medium, focusStyle, {
      opacity: 0.5
    });
  }
}
