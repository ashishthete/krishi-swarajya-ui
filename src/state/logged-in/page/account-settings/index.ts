import { Record, Transitions } from 'app/lib/state';
import { Services } from 'app/services';

import { UpdatePassword, UpdatePasswordMessage } from './password';

export function enter(id: string, services: Services) {
  return AccountSettings.enter(id, services);
}

// State

export class AccountSettings extends Record<StateData>() {
  public static enter = (id: string, services: Services) => {
    return new AccountSettings({
      id,
      password: UpdatePassword.enter(id)
    });
  }

  public exit = (services: Services) => undefined;

  public transitions = (services: Services) => [
    ...Transitions.map<UpdatePasswordMessage, AccountSettings, UpdatePassword>(this.password.transitions(services), (password) => {
      return this.update({ password });
    })
  ]
}

// Types

interface StateData {
  id: string;
  password: UpdatePassword;
}

// Messages

export type AccountSettingsMessage
  = UpdatePasswordMessage;
