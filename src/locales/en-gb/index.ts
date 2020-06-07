import { escape as escapeHTML } from 'app/lib/html';

import * as datetime from './datetime';
import { plural } from './plural';

export { datetime };

export const messages = {
  title: 'Krishi Swarajya',
  error: {
    title: 'Whoops!'
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
      notFound: 'We couldn\'t find the page you are looking for…',
      notImplemented: 'We haven\'t got to implementing this yet…'
    },
    autoLogout: {
      title: 'No user activity detected',
      message: (seconds: number) =>
        `You will be logged out in ${seconds.toLocaleString()} ${plural(seconds, {
          singular: `second`,
          plural: `seconds`
        })} due to inactivity, if you wish to remain logged in, please interact with the application.`
    },
    menu: {
      account: {
        title: 'Krishi Swarajya',
        crops: 'Crops',
        feed: 'Feed',
        settings: 'Settings',
        logOut: 'Sign out'
      }
    },
    page: {
      accountSettings: {
        title: 'Account Settings',
        password: {
          form: {
            title: 'Update password',
            description: 'In order to update your password, you need to provide both current and new passwords.',
            current: {
              title: 'Current password'
            },
            new: {
              title: 'New password'
            },
            confirm: {
              title: 'Confirm new password'
            },
            mismatch: {
              title: 'The passwords do not match'
            },
            update: {
              button: 'Update password'
            },
            success: {
              message: 'Password updated successfully.'
            }
          }
        }
      },
      error: {
        notAuthorised: 'You are not authorised to view this page',
        notFound: 'We couldn\'t find the page you are looking for…',
        other: 'Oops, something went wrong. Please try reloading the page'
      },
      cropList: {
        title: {
          crops: 'Crops'
        },
        list: {
          info: {
            age: {
              unknown: '-'
            },
            gender: {
              male: 'Male',
              female: 'Female'
            }
          }
        }
      }
    }
  }
};
