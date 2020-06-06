import { messages } from 'app/locales';
import { Services } from 'app/services';

// State

export const enter = (message: string, title?: string) =>
  Error.enter(title || messages.error.title, message);

export class Error {
  public static enter = (title: string, message: string) =>
    new Error(title, message)

  public exit = (services: Services) => undefined;

  public transitions = (services: Services) =>
    []

  private constructor(
    public readonly title: string,
    public readonly message: string
  ) {}
}
