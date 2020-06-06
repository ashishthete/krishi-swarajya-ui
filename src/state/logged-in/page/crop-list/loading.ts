import { on, Transitions } from 'app/lib/state';
import { messages } from 'app/locales';
import { Services } from 'app/services';
import { Account } from 'app/services/krishi/model';
import { enter as errorShow, ErrorShow } from 'app/state/logged-in/page/error-show';

import { CropList } from './base';
import { Loaded } from './loaded';

// State

export class Loading extends CropList {
  private readonly account: Account;
  private readonly crops: ReadonlyArray<Account.Crop> | null;
  private readonly filterBy: string;

  public static enter = (account: Account, services: Services) => {
    // services.ntmhub.accounts
    //   .account(account.id)
    //   .crops
    //   .list({}, ListOk, ListError, account.id);
    const crops: ReadonlyArray<Account.Crop> = [
      {
        id: '1',
        name: 'Cotton',
        imageURL: 'https://image.shutterstock.com/image-photo/ripe-cotton-seed-pods-on-260nw-758857111.jpg'
      },
      {
        id: '2',
        name: 'Wheat',
        imageURL: 'https://image.shutterstock.com/image-photo/organic-green-wheat-macro-image-260nw-196770224.jpg'
      },
      {
        id: '3',
        name: 'Bajra',
        imageURL: 'https://image.shutterstock.com/image-photo/fields-pearl-millets-bajra-morning-260nw-482696995.jpg'
      },
      {
        id: '4',
        name: 'Cron',
        imageURL: 'https://image.shutterstock.com/image-photo/cron-crops-flowers-green-260nw-1429450388.jpg'
      }
    ];
    return Loaded.enter(account, crops, services);
    // return new Loading({
    //   account,
    //   crops: null,
    //   filterBy
    // });
  }

  public transitions = (services: Services): Transitions<LoadingMessage, CropList | ErrorShow> => [
    on(ListOk, (ok) => ok.accountId === this.account.id, (ok) => {
      return this.update({crops: ok.crops});
    }),
    on(ListError, (error) => error.accountId === this.account.id, (error) =>
      errorShow(error.message))
  ]

  private constructor(init: LoadingData) {
    super();
    this.account = init.account;
    this.crops = init.crops;
    this.filterBy = init.filterBy;
  }

  private update(updates: Partial<LoadingData>) {
    return new Loading({
      account: this.account,
      crops: this.crops,
      filterBy: this.filterBy,
      ...updates
    });
  }
}

// Types

interface LoadingData {
  account: Account;
  crops: ReadonlyArray<Account.Crop> | null;
  filterBy: string;
}

// Message

export type LoadingMessage
  = ListOk
  | ListError;

class ListOk {
  constructor(
    public readonly crops: ReadonlyArray<Account.Crop>,
    public readonly accountId: string
  ) {}
}

class ListError {
  constructor(
    public readonly code: number,
    public readonly accountId: string
  ) {}

  get message() {
    switch (this.code) {
      case 403:
        return messages.loggedIn.page.error.notAuthorised;
      default:
        return messages.loggedIn.page.error.other;
    }
  }
}
