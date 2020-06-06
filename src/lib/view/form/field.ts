import { em } from 'csx';
import { h, VNode } from 'futura-dom';
import { classes, style } from 'typestyle';

export const field = (options: Options, children: VNode[]) =>
  h('label', {
    attrs: { class: classes(styles.field, options.class) }
  }, children);

interface Options {
  class?: string;
}

namespace styles {
  export const field = style({
    display: 'block',
    marginBottom: em(1)
  });
}
