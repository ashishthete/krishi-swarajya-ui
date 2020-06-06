import { plural } from './plural';

export const relative = {
  now: {
    future: 'In a moment',
    past: 'Just now'
  },
  seconds: {
    future: (value: number) =>
      plural(value, {
        singular: `In one second`,
        plural: `In ${value.toLocaleString()} seconds`
      }),
    past: (value: number) =>
      plural(value, {
        singular: `One second ago`,
        plural: `${value.toLocaleString()} seconds ago`
      })
  },
  minutes: {
    future: (value: number) =>
      plural(value, {
        singular: `In one minute`,
        plural: `In ${value.toLocaleString()} minutes`
      }),
    past: (value: number) =>
      plural(value, {
        singular: `One minute ago`,
        plural: `${value.toLocaleString()} minutes ago`
      })
  },
  hours: {
    future: (value: number) =>
      plural(value, {
        singular: `In one hour`,
        plural: `In ${value.toLocaleString()} hours`
      }),
    past: (value: number) =>
      plural(value, {
        singular: `One hour ago`,
        plural: `${value.toLocaleString()} hours ago`
      })
  }
};
