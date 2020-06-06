import { Transitions } from 'app/lib/state';
import { Services } from 'app/services';
import { ErrorShow } from 'app/state/logged-in/page/error-show';

import { PostListMessage } from './index';

export abstract class PostList {
  public exit = (services: Services) => {/* void */};
  public transitions = (services: Services): Transitions<PostListMessage, PostList | ErrorShow> => [];
}
