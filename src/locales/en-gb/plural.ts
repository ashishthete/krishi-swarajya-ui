export const plural = (count: number, choices: Strings) =>
  count === 1 ? choices.singular : choices.plural;

interface Strings {
  readonly plural: string;
  readonly singular: string;
}
