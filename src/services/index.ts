import { Dispatch } from 'futura-dom';
import { Krishi } from './krishi';
import { Navigation } from './navigation';
import { Prompt } from './prompt';
import { Storage } from './storage';
import { Timer } from './timer';

export interface Services {
  navigation: Navigation;
  krishi: Krishi;
  prompt: Prompt;
  storage: Storage;
  timer: Timer;
}

export const init = <Message>(config: Config, dispatch: Dispatch<Message>): Services => {
  const krishi =  new Krishi(config.api.krishi.url, dispatch);

  return {
    navigation: new Navigation('Krishi Swarajya', dispatch),
    krishi,
    prompt: new Prompt(dispatch),
    storage: new Storage(),
    timer: new Timer(dispatch)
  };
};

export interface Config {
  api: {
    readonly krishi: {
      readonly url: string;
    }
  };
}
