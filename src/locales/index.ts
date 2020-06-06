import * as enGB from './en-gb';
import * as mr from './mr-in';

const locale = getLocale();
export const messages = locale.messages;
export const datetime = locale.datetime;

// Helpers

export type Locale = typeof enGB;
export type Messages = typeof enGB.messages;
export type DateTime = typeof enGB.datetime;

function getLocale(): Locale {
  const supported = {
    'en-gb': enGB,
    'en': enGB,

    'mr-in': mr,
    'mr': mr
  };

  const languages = getLanguages();
  for (const language of languages) {
    if (language in supported) {
      return supported[language];
    }
  }

  return enGB;
}

function getLanguages() {
  const languages: string[] = [];

  if (typeof navigator !== 'undefined') {
    if (navigator.languages) {
      for (const language of navigator.languages) {
        languages.push(language.toLowerCase());
      }
    }
    // tslint:disable-next-line:no-string-literal
    if (navigator['userLanguage']) {
      // tslint:disable-next-line:no-string-literal
      languages.push(navigator['userLanguage'].toLowerCase());
    }
    if (navigator.language) {
      languages.push(navigator.language.toLowerCase());
    }
  }

  return languages;
}
