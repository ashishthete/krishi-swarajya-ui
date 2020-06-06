import { on, Record } from 'app/lib/state';
import { Services } from 'app/services';
import { TimerRef } from 'app/services/timer';

// State
const WARNING_TIMEOUT = 30;

export const enter = (sessionTimeout: number, services: Services) =>
  AutoLogout.enter(sessionTimeout, services);

export class AutoLogout extends Record<Data>() {
  private readonly timer: TimerRef;

  public static enter = (sessionTimeout: number, services: Services) => {
    const timer = services.timer.start((sessionTimeout - WARNING_TIMEOUT) * 1000, Tick);
    return new AutoLogout(timer, {
      remaining: sessionTimeout,
      sessionTimeout
    });
  }

  public get showWarning() {
    return this.remaining <= WARNING_TIMEOUT;
  }

  public exit = (services: Services) => {
    this.timer.cancel();
  }

  public transitions = (services: Services) => [
    on(UserActivity, (event) => {
      if (this.remaining > 0) {
        this.timer.cancel();
        return AutoLogout.enter(this.sessionTimeout, services);
      } else {
        return this;
      }
    }),
    on(Tick, ({ elapsed }) => {
      if (this.remaining > 0) {
        const timer = services.timer.start(1000, Tick);
        return new AutoLogout(timer, {
          remaining: elapsed >= 0
            ? Math.round(Math.max(0, this.remaining - (elapsed / 1000)))
            : 0,
          sessionTimeout: this.sessionTimeout
        });
      } else {
        return this;
      }
    })
  ]

  private constructor(timer: TimerRef, init: Data) {
    super(init);
    this.timer = timer;
  }
}

interface Data {
  remaining: number;
  sessionTimeout: number;
}

// Message

export type Message
  = UserActivity
  | Tick;

export class UserActivity {}

class Tick {
  constructor(
    public readonly elapsed: number
  ) {}
}
