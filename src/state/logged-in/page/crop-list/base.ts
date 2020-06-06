import { Transitions } from 'app/lib/state';
import { Services } from 'app/services';
import { ErrorShow } from 'app/state/logged-in/page/error-show';

import { CropListMessage } from './index';

export abstract class CropList {
  public exit = (services: Services) => {/* void */};
  public transitions = (services: Services): Transitions<CropListMessage, CropList | ErrorShow> => [];
}
