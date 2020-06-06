import { em, percent } from 'csx';
import { h } from 'futura-dom';
import { classes, style } from 'typestyle';

import * as color from 'app/lib/view/color';
import { focus as focusStyle } from './style/focus';
import { input as inputStyle } from './style/input';

export const select = (options: Options, choices: ReadonlyArray<Choice>) =>
  h('select', {
    attrs: attrs(options),
    props: props(options),
    on: on(options)
  }, [...none(hasValue(options.value, choices)), ...choices].map((choice) =>
    option(choice, options.value)
  ));

const hasValue = (selected: string | undefined, choices: ReadonlyArray<Choice>) =>
  selected !== undefined
    && choices.some((choice) => choice.value === selected);

const none = (hasValue: boolean): Choice[] =>
  hasValue ? [] : [ { label: '', value: '' } ];

const option = (choice: Choice, selected?: string) =>
  h(`option`, {
    key: choice.value,
    attrs: {
      class: styles.option,
      value: choice.value,
      selected: choice.value === selected
    },
    props: {
      disabled: choice.disabled,
      hidden: choice.hidden
    }
  }, choice.label);

const attrs = (options: Options) =>
  ({
    name: options.name,
    class: classes(styles.select, options.class),
    required: options.required
  });

const props = (options: Options) =>
  ({
    disabled: options.readOnly
  });

const on = ({ onChange }: Options) =>
  ({
    change: onChange
  });

interface Options {
  name?: string;
  class?: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string;

  onChange?: (event: Event) => void;
}

interface Choice {
  label: string;
  value: string;
  disabled?: boolean;
  hidden?: boolean;
}

namespace styles {
  const arrow = (color) =>
    // tslint:disable-next-line:max-line-length
    `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16' width='24px' height='16px'%3E%3Cpath fill='${color.toString()}' d='M23.52 3.48L12 15.4.48 3.48c-.652-.677-.632-1.753.045-2.405.677-.652 1.753-.632 2.405.045L12 10.51l9.08-9.39c.652-.677 1.728-.697 2.405-.045.677.652.697 1.728.045 2.405h-.01z'/%3E%3C/svg%3E")`;

  export const select = style(focusStyle, inputStyle, {
    $nest: {
      '&:disabled': {
        backgroundImage: arrow(color.gunMetal.fade(0.1))
      }
    },
    backgroundImage: arrow(color.gunMetal.lighten(0.25)),
    backgroundRepeat: 'no-repeat',
    backgroundOrigin: 'content-box',
    backgroundPosition: `center right ${em(0.25)}`,
    backgroundSize: `auto ${percent(40)}`,
    boxShadow: 'none',
    padding: `${em(0.5)} ${em(0.75)}`
  }, {
    '$nest': {
      '&::-ms-expand': { display: 'none' }
    },
    'appearance': 'none',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none'
  });

  export const option = style({
    backgroundColor: color.white.toString(),
    color: color.gunMetal.lighten(0.1).toString()
  });
}
