import { plural } from './plural';

export const duration = (seconds: number): string => {
  if (seconds === undefined || seconds < 60) {
    return inSeconds(seconds);
  } else if (seconds < 3600) {
    return inMinutes(seconds);
  } else if (seconds < 24 * 3600) {
    return inHours(seconds);
  } else {
    return inDays(seconds);
  }
};

const inSeconds = (seconds: number) =>
  plural(seconds, {singular: 'second', plural: `${seconds.toLocaleString()} seconds`});

const inMinutes = (seconds: number) => {
  const minutes = plural(Math.ceil(seconds / 60), {singular: 'minute', plural: `${Math.ceil(seconds / 60).toLocaleString()} minutes`});
  return seconds % 60 === 0
    ? minutes
    : `${minutes} ${inSeconds(seconds % 60)}`;

};

const inHours = (seconds: number) => {
  const hours = plural(Math.ceil(seconds / 3600), {singular: 'hour', plural: `${Math.ceil(seconds / 3600).toLocaleString()} hours`});
  return seconds % 3600 === 0
    ? hours
    : `${hours} ${inMinutes(seconds % 3600)}`;
};

const inDays = (seconds: number) => {
  const days = plural(Math.ceil(seconds / 86400) , {singular: 'day', plural: `${Math.ceil(seconds / 86400).toLocaleString()} days`});
  return seconds % 86400 === 0
    ? days
    : `${days} ${inHours(seconds % 86400)}`;
};
