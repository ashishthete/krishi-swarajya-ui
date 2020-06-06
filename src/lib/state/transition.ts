  // tslint:disable-next-line:max-line-length
export function on<Message, NextState>(Message: Class<Message>, callback: Callback<Message, NextState>): Transition<Message, NextState>;
export function on<Message, NextState>(Message: Class<Message>, predicate: Predicate<Message>, callback: Callback<Message, NextState>): Transition<Message, NextState>;
export function on() {
  const Message = arguments[0];
  if (arguments.length === 2) {
    const callback = arguments[1];
    return new Transition((message) => message instanceof Message, callback);
  } else if (arguments.length === 3) {
    const predicate = arguments[1];
    const callback = arguments[2];
    return new Transition((message) => message instanceof Message && predicate(message), callback);
  }
}

export function when<Message, NextState>(predicate: Predicate<Message>, callback: Callback<Message, NextState>): Transition<Message, NextState> {
  return new Transition(predicate, callback);
}

export namespace Transitions {
  // tslint:disable-next-line:max-line-length
  export const map = <Message, State, SubState>(transitions: Transitions<Message, SubState>, fun: (result: SubState) => State) =>
    transitions.map((transition) => transition.map(fun));

  export const match = <Message, Result>(message: Message, transitions: Transitions<Message, Result>) => {
    for (const transition of transitions) {
      if (transition.matches(message)) {
        return () => transition.callback.call(undefined, message);
      }
    }
  };
}

// Types

export type Transitions<Message, Result> = ReadonlyArray<Transition<Message, Result>>;

export class Transition<Message, Result> {
  public map<Result1>(fun: (result: Result) => Result1) {
    return new Transition(this.predicate, (message: Message) => fun(this.callback.call(undefined, message)));
  }

  public matches(message: Message) {
    return this.predicate.call(undefined, message);
  }

  constructor(
    private readonly predicate: Predicate<Message>,
    public readonly callback: Callback<Message, Result>
  ) {}
}

type Class<T> = new(...args) => T;
type Predicate<Message> = (message: Message) => boolean;
type Callback<Message, Result> = (message: Message) => Result;
