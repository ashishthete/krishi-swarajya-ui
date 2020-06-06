import { messages } from 'app/locales';
import { Services } from 'app/services';

// State

export const enter = (message: string, title?: string) =>
ErrorShow.enter(title || messages.error.title, message);

export class ErrorShow {
  public static enter = (title: string, message: string) =>
    new ErrorShow(title, message)

  public exit = (services: Services) => undefined;

  public transitions = (services: Services) =>
    []

  private constructor(
    public readonly title: string,
    public readonly message: string
  ) {}
}
