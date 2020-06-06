import { escape as escapeHTML } from 'app/lib/html';

import { Messages } from '../index';

import * as datetime from './datetime';
import { plural } from './plural';

export { datetime };

export const messages: Messages = {
  title: 'कृषी स्वराज्य',
  error: {
    title: 'Uffda!'
  },
  loading: {
  },
  loggedOut: {
    authenticateCredential: {
      error: {
        incorrectCredentials: 'Invalid username or password',
        other: 'Oops, something went wrong. Please try again'
      },
      loaded: {
        note: (org: string) => `Please enter your username and password to sign in to <strong>${escapeHTML(org)}</strong>`,
        organisation: 'Organisation',
        password: 'Password',
        username: 'Username',
        logIn: 'Sign in'
      }
    },
    authenticateOTP: {
      error: {
        incorrectCredentials: 'Invalid one time code',
        other: 'Oops, something went wrong. Please try again'
      },
      loaded: {
        note: (via: string, on: string) =>
          `A one time code has been sent ${via} to ${on}`,
        organisation: 'Organisation',
        username: 'Username',
        otp: 'The one time code',
        logIn: 'Sign in'
      }
    }
  },
  loggedIn: {
    error: {
      notFound: 'Siden finnes ikke…',
      notImplemented: 'We haven\'t got to implementing this yet…'
    },
    autoLogout: {
      title: 'Det er ingen aktivitet på siden',
      message: (seconds: number) =>
      `Du blir logget ut om ${seconds.toLocaleString()} ${plural(seconds, {
        singular: `sekund`,
        plural: `sekunder`
      })} som følge av ingen aktivitet på siden. Hvis du ønsker å være innlogget må du aktivisere denne siden straks.`
    },
    menu: {
      account: {
        crops: 'पिके',
        feed: 'कृषी चर्चा',
        settings: 'सेटिंग्ज',
        logOut: 'बाहेर पडा'
      }
    },
    page: {
      accountSettings: {
        title: 'Innstillinger',
        password: {
          form: {
            title: 'Oppdatere passord',
            description: 'For å oppdatere passord, må du skrive både gjeldende og nytt passord',
            current: {
              title: 'Gjeldende passord'
            },
            new: {
              title: 'Nytt passord'
            },
            confirm: {
              title: 'Bekreft nytt passord'
            },
            mismatch: {
              title: 'Passordene er ulike'
            },
            update: {
              button: 'Oppdatere passord'
            },
            success: {
              message: 'Passord er oppdatert'
            }
          }
        }
      },
      error: {
        notAuthorised: 'Du er ikke autorisert til å vise denne siden',
        notFound: 'Siden finnes ikke…',
        other: 'Noe gikk galt med tilkobling til server. Kan du laste opp siden på ny?'
      },
      cropList: {
        title: {
          crops: 'पिके'
        },
        list: {
          info: {
            age: {
              unknown: '-'
            },
            gender: {
              male: 'Mann',
              female: 'Kvinne'
            }
          }
        }
      }
    }
  }
};
