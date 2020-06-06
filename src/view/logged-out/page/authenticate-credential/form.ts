import { em, percent } from 'csx';
import { Dispatch, h, VNode  } from 'futura-dom';
import { style } from 'typestyle';

import { button, error, field, form, input, label } from 'app/lib/view/form';
import { messages } from 'app/locales';
import { Loaded, LogIn, Message, Update } from 'app/state/logged-out/page/authenticate-credential';

const _ = messages.loggedOut.authenticateCredential.loaded;

// View

export const view = (state: Loaded, dispatch: Dispatch<Message>) =>
  form({
    class: styles.form,
    onSubmit: onSubmit(dispatch)
  }, [
    error(state.error),
    fields([
      username(state, dispatch),
      password(state, dispatch)
    ]),
    buttons(state)
  ]);

const fields = (children: VNode[]) =>
  h('div', children);

const username = (state: Loaded, dispatch: Dispatch<Update>) =>
  field({}, [
    label({}, _.username),
    input.text({
      autocomplete: 'off',
      autocorrect: 'off',
      autocapitalize: 'off',
      autofocus: true,
      onInput: onInput('username', dispatch),
      readOnly: state.loggingIn,
      required: true,
      value: state.username
    })
  ]);

const password = (state: Loaded, dispatch: Dispatch<Update>) =>
  field({}, [
    label({}, _.password),
    input.password({
      autocomplete: 'off',
      onInput: onInput('password', dispatch),
      readOnly: state.loggingIn,
      required: true,
      value: state.password
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

const onInput = (field: 'username' | 'password', dispatch: Dispatch<Update>) => (event) =>
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
    margin: `${em(2)} 0 ${em(0.5)} 0`,
    textAlign: 'center'
  });

  export const submit = style({
    padding: `${em(1)} ${em(2)}`,
    width: percent(100)
  });

  export const chooseAnotherOrganisation = style({
    cursor: 'pointer',
    fontSize: em(0.8),
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'underline',
    width: percent(100)
  });
}
