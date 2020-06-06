import { h } from 'futura-dom';
import { classes, style } from 'typestyle';

import { focus as focusStyle } from './style/focus';
import { input as inputStyle } from './style/input';

export const textarea = (options: Options) =>
  h('textarea', {
    attrs: attrs(options),
    props: props(options),
    on: on(options)
  });

const attrs = (options: Options) =>
  ({
    autofocus: options.autofocus,
    class: classes(styles.textarea, options.class),
    placeholder: options.placeholder
  });

const props = (options: Options) =>
  ({
    readOnly: options.readOnly,
    value: options.value
  });

const on = ({ onInput }: Options) =>
  ({
    input: onInput
  });

interface Options {
  autocapitalize?: string;
  autocomplete?: string;
  autocorrect?: string;
  autofocus?: boolean;
  class?: string;
  placeholder?: string;
  readOnly?: boolean;
  value: string;

  onInput?: (event: Event) => void;
}

namespace styles {
  export const textarea = style(focusStyle, inputStyle, {
    resize: 'vertical'
  });
}
