import { em, percent } from 'csx';
import { Dispatch, h, VNode  } from 'futura-dom';
import { style } from 'typestyle';

import { button, error, field, form, input, label } from 'app/lib/view/form';
import { messages } from 'app/locales';
import { Loaded, LogIn, Message, Update } from 'app/state/logged-out/page/authenticate-otp';

const _ = messages.loggedOut.authenticateOTP.loaded;

// View

export const view = (state: Loaded, dispatch: Dispatch<Message>) =>
  form({
    class: styles.form,
    onSubmit: onSubmit(dispatch)
  }, [
    note(state.via, state.on),
    error(state.error),
    fields([
      username(state.username),
      otp(state, dispatch)
    ]),
    buttons(state)
  ]);

const note = (via: string, on: string) =>
  h(`div.${styles.note}`, {
    props: {
      innerHTML: _.note(via, on)
    }
  });

const fields = (children: VNode[]) =>
  h('div', children);

const username = (username: string) =>
  field({}, [
    label({}, _.username),
    input.text({
      autocomplete: 'off',
      autocorrect: 'off',
      autocapitalize: 'off',
      autofocus: true,
      readOnly: true,
      value: username
    })
  ]);

const otp = (state: Loaded, dispatch: Dispatch<Update>) =>
  field({}, [
    label({}, _.otp),
    input.password({
      autocomplete: 'off',
      onInput: onInput('otp', dispatch),
      readOnly: state.loggingIn,
      required: true,
      value: state.otp
    })
  ]);

const buttons = (state: Loaded) =>
  h(`div.${styles.buttons}`, [
    button.submit({
      class: styles.submit,
      disabled: state.loggingIn,
      label: _.logIn
    })
  ]);

// Messages

const onInput = (field: 'otp', dispatch: Dispatch<Update>) => (event) =>
  dispatch(new Update({ [field]: event.target.value }));

const onSubmit = (dispatch: Dispatch<LogIn>) => (event: Event) =>
  dispatch(new LogIn());

// Styles

namespace styles {
  export const form = style({
    width: percent(100),
    maxWidth: em(18),
    padding: em(1)
  });

  export const note = style({
  });

  export const buttons = style({
    margin: `${em(2)} 0`,
    textAlign: 'center'
  });

  export const submit = style({
    padding: `${em(1)} ${em(2)}`,
    width: percent(100)
  });
}
