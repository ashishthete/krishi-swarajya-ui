import { h, VNode } from 'futura-dom';
import { classes, style } from 'typestyle';

export const link = (options: LinkOptions) =>
  h('a', {
    attrs: {
      class: classes(styles.link, options.class),
      href: '/' + options.path.map(encodeURIComponent).join('/')
    },
    on: {
      mousedown: (event) => event.preventDefault()
    }
  }, [ options.label ]);

export const externalLink = (options: ExternalLinkOptions) =>
  h('a', {
    attrs: {
      class: classes(styles.link, options.class),
      href: options.url,
      target: options.target
    },
    on: {
      mousedown: (event) => event.preventDefault()
    }
  }, [ options.label ]);

export const buttonLink = (options: ButtonOptions) =>
  h('button', {
    attrs: {
      class: classes(styles.button, options.class)
    },
    on: {
      click: options.onClick,
      mousedown: (event) => event.preventDefault()
    }
  }, [ options.label ]);

// Types

interface LinkOptions {
  class?: string;
  label: string | VNode;
  path: ReadonlyArray<string>;
}

interface ExternalLinkOptions {
  class?: string;
  target?: string;
  label: string | VNode;
  url: string;
}

interface ButtonOptions {
  class?: string;
  label: string;
  onClick: (event: MouseEvent) => void;
}

// Styles

namespace styles {
  export const link = style({
    color: 'inherit'
  });

  export const button = style({
    backgroundColor: 'transparent',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    padding: 0,
    textDecoration: 'underline',
    textTransform: 'inherit'
  });
}
