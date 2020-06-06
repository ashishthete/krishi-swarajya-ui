import { h } from 'futura-dom';
import { classes, style } from 'typestyle';

import { focus as focusStyle } from './style/focus';
import { input as inputStyle } from './style/input';

export namespace input {
  export enum type {
    text = 'text',
    password = 'password',
    email = 'email',
    tel = 'tel',
    date = 'date',
    time = 'time',
    number = 'number'
  }

  export const text = (options: TextInput.Options) =>
    h('input', {
      attrs: TextInput.attrs(type.text, options),
      props: TextInput.props(options),
      on: TextInput.on(options)
    }, []);

  export const password = (options: PasswordInput.Options) =>
    h('input', {
      attrs: PasswordInput.attrs(type.password, options),
      props: PasswordInput.props(options),
      on: PasswordInput.on(options)
    }, []);

  export const email = (options: EmailInput.Options) =>
    h('input', {
      attrs: EmailInput.attrs(type.email, options),
      props: EmailInput.props(options),
      on: EmailInput.on(options)
    }, []);

  export const tel = (options: TelephoneInput.Options) =>
    h('input', {
      attrs: TelephoneInput.attrs(type.tel, options),
      props: TelephoneInput.props(options),
      on: TelephoneInput.on(options)
    }, []);

  export const date = (options: DateInput.Options) =>
    h('input', {
      attrs: DateInput.attrs(type.date, options),
      props: DateInput.props(options),
      on: DateInput.on(options)
    }, []);

  export const time = (options: TimeInput.Options) =>
    h('input', {
      attrs: TimeInput.attrs(type.time, options),
      props: TimeInput.props(options),
      on: TimeInput.on(options)
    }, []);

  // tslint:disable-next-line:variable-name
  export const number = (options: NumberInput.Options) =>
    h('input', {
      attrs: NumberInput.attrs(type.number, options),
      props: NumberInput.props(options),
      on: NumberInput.on(options)
    }, []);
}

const placeholder = (type: input.type, placeholder?: string) => {
  if (placeholder !== undefined) {
    return placeholder;
  } else {
    switch (type) {
      case input.type.date: return 'YYYY-MM-DD';
      case input.type.time: return 'HH:MM';
      default: return undefined;
    }
  }
};

namespace Default {
  export interface Options {
    autocomplete?: string;
    autofocus?: boolean;
    class?: string;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    value: string;

    onBlur?: (event: Event) => void;
    onFocus?: (event: Event) => void;
    onInput?: (event: Event) => void;
  }

  export const attrs = (type: input.type, options: Options) =>
  ({
    autocomplete: options.autocomplete,
    autofocus: options.autofocus,
    class: classes(styles.input, options.class),
    name: options.name,
    placeholder: placeholder(type, options.placeholder),
    required: options.required,
    type
  });

  export const props = (options: Options) =>
  ({
    readOnly: options.readOnly,
    value: options.value
  });

  export const on = ({ onBlur, onFocus, onInput }: Options) =>
  ({
    blur: onBlur,
    focus: onFocus,
    input: onInput
  });
}

namespace TextInput {
  export interface Options extends Default.Options {
    minlength?: number;
    maxlength?: number;
    autocapitalize?: string;
    autocorrect?: string;
  }

  export const attrs = (type: input.type.text, options: TextInput.Options) =>
  ({
    ...Default.attrs(type, options),
    ...(options.minlength !== undefined ? { minlength: options.minlength.toString() } : {}),
    ...(options.maxlength !== undefined ? { maxlength: options.maxlength.toString() } : {}),
    ...(options.autocapitalize !== undefined ? { autocapitalize: options.autocapitalize } : {}),
    ...(options.autocorrect !== undefined ? { autocorrect: options.autocorrect } : {})
  });

  export const props = Default.props;
  export const on = Default.on;
}

namespace PasswordInput {
  export interface Options extends Default.Options {
    minlength?: number;
    maxlength?: number;
    pattern?: string;
  }

  export const attrs = (type: input.type.password, options: PasswordInput.Options) =>
  ({
    ...Default.attrs(type, options),
    ...(options.minlength !== undefined ? { minlength: options.minlength.toString() } : {}),
    ...(options.maxlength !== undefined ? { maxlength: options.maxlength.toString() } : {}),
    ...(options.pattern !== undefined ? { pattern: options.pattern } : {})
  });

  export const props = Default.props;
  export const on = Default.on;
}

namespace EmailInput {
  export interface Options extends Default.Options {}

  export const attrs = Default.attrs;
  export const props = Default.props;
  export const on = Default.on;
}

namespace TelephoneInput {
  export interface Options extends Default.Options {}

  export const attrs = (type: input.type.tel, options: Options) =>
  ({
    ...Default.attrs(type, options),
    pattern: '^\\+[1-9]\\d{9,14}$'
  });

  export const props = Default.props;
  export const on = Default.on;
}

namespace DateInput {
  export interface Options extends Default.Options {
    max?: Date;
    min?: Date;
    step?: number;
  }

  export const attrs = (type: input.type.date, options: DateInput.Options) =>
  ({
    ...Default.attrs(type, options),
    ...(options.max !== undefined ? { max: options.max.toISOString().slice(0, 10) } : {}),
    ...(options.min !== undefined ? { min: options.min.toISOString().slice(0, 10) } : {}),
    ...(options.step !== undefined ? { step: options.step.toString() } : {}),
    pattern: '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])'
  });

  export const props = Default.props;
  export const on = Default.on;
}

namespace TimeInput {
  export interface Options extends Default.Options {
    max?: string;
    min?: string;
    step?: number;
  }

  export const attrs = (type: input.type.time, options: TimeInput.Options) =>
  ({
    ...Default.attrs(type, options),
    ...(options.max !== undefined ? { max: options.max } : {}),
    ...(options.min !== undefined ? { min: options.min } : {}),
    ...(options.step !== undefined ? { step: options.step.toString() } : {}),
    pattern: '^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$'
  });

  export const props = Default.props;
  export const on = Default.on;
}

namespace NumberInput {
  export interface Options extends Default.Options {
    max?: number;
    min?: number;
    step?: number;
  }

  export const attrs = (type: input.type.number, options: NumberInput.Options) =>
  ({
    ...Default.attrs(type, options),
    ...(options.max !== undefined ? { max: options.max.toString() } : {}),
    ...(options.min !== undefined ? { min: options.min.toString() } : {}),
    ...(options.step !== undefined ? { step: options.step.toString() } : {})
  });

  export const props = Default.props;
  export const on = Default.on;
}

// Styles

namespace styles {
  export const input = style(focusStyle, inputStyle);
}
