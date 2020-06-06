import { Transition } from 'app/lib/state';
import { Services } from 'app/services';

export abstract class AuthenticateOTP {
  public abstract transitions: (services: Services) => ReadonlyArray<Transition<any, any>>;
}
