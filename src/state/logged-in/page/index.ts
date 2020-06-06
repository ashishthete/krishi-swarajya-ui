import { messages } from 'app/locales';
import { Services } from 'app/services';
import { Account } from 'app/services/krishi/model';

import { AccountSettings, AccountSettingsMessage, enter as accountSettings } from './account-settings';
import { CropList, CropListMessage, enter as cropList } from './crop-list';
import { enter as errorShow, ErrorShow } from './error-show';
import { enter as postList, PostList, PostListMessage } from './post-list';

export const init = (account: Account, services: Services): Page => {
  return services.navigation.path.match<Page>([
    route([], () => {
      services.navigation.replacePath(['crops']);
      return cropList(account, services);
    }),
    route(['settings'], () => accountSettings(account.id, services)),
    route(['posts'], () => postList(account, services)),
    route(['crops'], () => cropList(account, services))
  ], () => errorShow(messages.loggedIn.error.notFound));
};

const route = (path: ReadonlyArray<string | null>, handler: (...segments: string[]) => Page) =>
  ({ path, do: handler });

export type Page
  = AccountSettings
  | ErrorShow
  | PostList
  | CropList;

export type Message
  = AccountSettingsMessage
  | PostListMessage
  | CropListMessage;

export {
  AccountSettings,
  PostList,
  CropList
};
