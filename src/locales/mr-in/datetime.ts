import { DateTime } from '../index';
import { plural } from './plural';

export const relative: DateTime['relative'] = {
  now: {
    future: 'Om noen sekunder',
    past: 'Noen sekunder siden'
  },
  seconds: {
    future: (value: number) =>
      plural(value, {
        singular: `Om ett sekund`,
        plural: `Om ${value.toLocaleString()} sekunder`
      }),
    past: (value: number) =>
      plural(value, {
        singular: `Ett sekund siden`,
        plural: `${value.toLocaleString()} sekunder siden`
      })
  },
  minutes: {
    future: (value: number) =>
      plural(value, {
        singular: `Om ett minutt`,
        plural: `Om ${value.toLocaleString()} minutter`
      }),
    past: (value: number) =>
      plural(value, {
        singular: `Ett minutt siden`,
        plural: `${value.toLocaleString()} minutter siden`
      })
  },
  hours: {
    future: (value: number) =>
      plural(value, {
        singular: `Om en time`,
        plural: `Om ${value.toLocaleString()} timer`
      }),
    past: (value: number) =>
      plural(value, {
        singular: `En time siden`,
        plural: `${value.toLocaleString()} timer siden`
      })
  }
};
