import { on, Transitions } from 'app/lib/state';
import { messages } from 'app/locales';
import { Services } from 'app/services';
import { Account } from 'app/services/krishi/model';
import { enter as errorShow, ErrorShow } from 'app/state/logged-in/page/error-show';

import { PostList } from './base';
import { Loaded } from './loaded';

// State

export class Loading extends PostList {
  private readonly account: Account;
  private readonly posts: ReadonlyArray<Account.Post> | null;
  private readonly filterBy: string;

  public static enter = (account: Account, services: Services) => {
    // services.ntmhub.accounts
    //   .account(account.id)
    //   .posts
    //   .list({}, ListOk, ListError, account.id);
    const posts: ReadonlyArray<Account.Post> = [
      {
        id: '1',
        title: 'Checkout ths ',
        desc: '',
        imageURL: 'https://denimhunters.com/wp-content/uploads/2016/11/Cottonplant-1024x683.jpg',
        liked: null,
        comments: 0
      },
      {
        id: '2',
        title: 'Wheat',
        desc: '',
        imageURL: 'https://denimhunters.com/wp-content/uploads/2016/11/Cottonplant-1024x683.jpg',
        liked: null,
        comments: 0
      },
      {
        id: '3',
        title: 'Bajra',
        desc: '',
        imageURL: 'https://denimhunters.com/wp-content/uploads/2016/11/Cottonplant-1024x683.jpg',
        liked: null,
        comments: 0
      }
    ];
    return Loaded.enter(account, posts, services);
    // return new Loading({
    //   account,
    //   posts: null,
    //   filterBy
    // });
  }

  public transitions = (services: Services): Transitions<LoadingMessage, PostList | ErrorShow> => [
    on(ListOk, (ok) => ok.accountId === this.account.id, (ok) => {
      return this.update({posts: ok.posts});
    }),
    on(ListError, (error) => error.accountId === this.account.id, (error) =>
      errorShow(error.message))
  ]

  private constructor(init: LoadingData) {
    super();
    this.account = init.account;
    this.posts = init.posts;
    this.filterBy = init.filterBy;
  }

  private update(updates: Partial<LoadingData>) {
    return new Loading({
      account: this.account,
      posts: this.posts,
      filterBy: this.filterBy,
      ...updates
    });
  }
}

// Types

interface LoadingData {
  account: Account;
  posts: ReadonlyArray<Account.Post> | null;
  filterBy: string;
}

// Message

export type LoadingMessage
  = ListOk
  | ListError;

class ListOk {
  constructor(
    public readonly posts: ReadonlyArray<Account.Post>,
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
