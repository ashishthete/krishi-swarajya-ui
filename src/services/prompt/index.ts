import { Dispatch } from 'futura-dom';

export class Prompt {
  private readonly dispatch: Dispatch;

  constructor(dispatch: Dispatch) {
    this.dispatch = dispatch;
  }

  public confirm(message: string, Confirm, Reject, context?) {
    if (window.confirm(message)) {
      this.dispatch(new Confirm(context));
    } else {
      this.dispatch(new Reject(context));
    }
  }
}
