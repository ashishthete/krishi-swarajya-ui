import { Dispatch } from 'futura-dom';

export class Timer {
  private readonly dispatch: Dispatch;

  constructor(dispatch: Dispatch) {
    this.dispatch = dispatch;
  }

  public start<T>(delay: number, Timeout: new(elapsed: number, ...args) => T, ...args) {
    const start = new Date().getTime();
    return new TimerRef(delay, () => {
      const elapsed = new Date().getTime() - start;
      this.dispatch(new Timeout(elapsed, ...args));
    });
  }
}

export class TimerRef {
  private readonly timerId: number;

  constructor(delay: number, callback: () => void) {
    this.timerId = window.setTimeout(callback, delay);
  }

  public cancel() {
    window.clearTimeout(this.timerId);
  }
}
