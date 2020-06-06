import { Services } from 'app/services';
import { AuthenticateCredential, enter, Message as AuthenticateCredentialMessage } from './authenticate-credential';
import { AuthenticateOTP, Message as AuthenticateOTPMessage } from './authenticate-otp';
import { ErrorShow } from './error-show';

export const init = (services: Services): Page => enter(services);

export type Page
  = AuthenticateCredential
  | AuthenticateOTP
  | ErrorShow;

export type PageMessage
  = AuthenticateCredentialMessage
  | AuthenticateOTPMessage;

export {
  AuthenticateCredential,
  AuthenticateOTP,
  ErrorShow
};
