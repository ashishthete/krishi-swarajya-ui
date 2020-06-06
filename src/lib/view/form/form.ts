import { h, VNode } from 'futura-dom';
import { classes, style } from 'typestyle';

export const form = (options: Options, children: VNode[]) =>
  h('form', {
    attrs: attrs(options),
    on: on(options)
  }, children);

const attrs = (options: Options) =>
  ({
    class: classes(styles.form, options.class)
  });

const on = ({ onSubmit }: Options) =>
  ({
    submit: (event: Event) => {
      event.preventDefault();
      onSubmit(event);
    }
  });

interface Options {
  class?: string;
  onSubmit: (event: Event) => void;
}

namespace styles {
  export const form = style({
  });
}
