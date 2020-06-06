import { em } from 'csx';
import { Dispatch, h, VNode } from 'futura-dom';
import { style } from 'typestyle';

import { button, error, field, form, input, label, message } from 'app/lib/view/form';
import { messages } from 'app/locales';
import { Submit, Update, UpdatePassword } from 'app/state/logged-in/page/account-settings/password';

const _ = messages.loggedIn.page.accountSettings.password;

export const view = (state: UpdatePassword, dispatch: Dispatch) =>
  form({
    onSubmit: onSubmit(dispatch)
  }, [
    state.message !== '' ? message(state.message) : null,
    error(state.error),
    fields([
      currentPassword(state, dispatch),
      newPassword(state, dispatch),
      confirmPassword(state, dispatch)
    ]),
    update(state, dispatch)
  ]);

const fields = (children: VNode[]) =>
  h('div', children);

const currentPassword = (state: UpdatePassword, dispatch: Dispatch<Update>) =>
  field({}, [
    label({ required: true }, _.form.current.title),
    input.password({
      autocomplete: 'off',
      autofocus: true,
      onInput: onInput('currentPassword', dispatch),
      required: true,
      value: state.currentPassword
    })
  ]);

// TODO: Add Length Validation for password fields
const newPassword = (state: UpdatePassword, dispatch: Dispatch<Update>) =>
  field({}, [
    label({ required: true }, _.form.new.title),
    input.password({
      name: 'password',
      autocomplete: 'off',
      autofocus: true,
      minlength: 8,
      maxlength: 100,
      onInput: onInput('newPassword', dispatch),
      required: true,
      value: state.newPassword
    })
  ]);

const confirmPassword = (state: UpdatePassword, dispatch: Dispatch<Update>) =>
  field({}, [
    label({ required: true }, _.form.confirm.title),
    input.password({
      name: 'password-confirm',
      autocomplete: 'off',
      autofocus: true,
      minlength: 8,
      maxlength: 100,
      onInput: onInput('confirmPassword', dispatch),
      required: true,
      value: state.confirmPassword
    })
  ]);

const update = (state: UpdatePassword, dispatch: Dispatch) =>
  h(`div.${styles.buttons}`, [
    button.submit({
      class: styles.button,
      label: _.form.update.button
    })
  ]);

// Messages

const onInput = (field: 'currentPassword' | 'newPassword' | 'confirmPassword', dispatch) => (event) => {
  event.target.setCustomValidity('');
  dispatch(new Update({ [field]: event.target.value }));
};

const onSubmit = (dispatch) => (event) => {
  const form: HTMLFormElement = event.target;
  // tslint:disable-next-line:no-string-literal
  const password = form.elements['password'];
  const passwordConfirm = form.elements['password-confirm'];

  if (password.value !== passwordConfirm.value) {
    passwordConfirm.setCustomValidity(_.form.mismatch.title);
  } else {
    dispatch(new Submit());
  }
};

// Styles

namespace styles {
  export const buttons = style({
    marginTop: em(2)
  });

  export const button = style({
    $nest: {
      '& + &': {
        marginLeft: em(1)
      }
    }
  });
}
