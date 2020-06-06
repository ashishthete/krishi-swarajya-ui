import { on, Record } from 'app/lib/state';
import { messages } from 'app/locales';
import { Services } from 'app/services';
import { Account } from 'app/services/krishi/model';

export class UpdatePassword extends Record<StateData>() {
  public static enter = (id: string) => {
    return new UpdatePassword({
      id,
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      error: '',
      message: '',
      updating: false
    });
  }

  public transitions = (services: Services) => [
    on(UpdateOk, (event) => {
      return this.update({
        message: event.message,
        updating: false,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    }),
    on(UpdateError, (event) =>
      this.update({ error: event.message, updating: false })),
    on(Update, (event) =>
      this.update({ ...event.updates, error: '', message: '' })),
    on(Submit, (event) => {
      services.krishi.accounts.account(this.id)
        .password
        .update(
          {
            password: {
              new: this.newPassword,
              current: this.currentPassword
            }
          },
          UpdateOk,
          UpdateError
        );
      return this.update({ updating: true });
    })
  ]
}

interface StateData {
  id: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  error: string;
  message: string;
  updating: boolean;
}

// Message

export type UpdatePasswordMessage
  = UpdateOk
  | UpdateError
  | Submit
  | Update;

// Events

class UpdateOk {
  constructor(public readonly account: Account) {}

  get message(): string {
    return messages.loggedIn.page.accountSettings.password.form.success.message;
  }
}

class UpdateError {
  constructor(
    public readonly code: number
  ) {}

  get message(): string {
    switch (this.code) {
      case 403:
        return messages.loggedIn.page.error.notAuthorised;
      default:
        return messages.loggedIn.page.error.other;
    }
  }
}

export class Update {
  constructor(public readonly updates: {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string,
    error?: string
  }) {}
}

export class Submit {
}
