export function age(date: Date, from?: Date) {
  if (from === undefined) {
    from = new Date();
  }
  return new Date(from.getTime() - date.getTime()).getUTCFullYear() - 1970;
}
