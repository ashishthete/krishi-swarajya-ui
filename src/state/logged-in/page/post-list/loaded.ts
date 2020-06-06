// import { Transitions } from 'app/lib/state';
import { Services } from 'app/services';
import { Account } from 'app/services/krishi/model';

import { PostList } from './base';
import { Post } from './post';

// State

export class Loaded extends PostList {
  public static enter = (
    account: Account,
    accPosts: ReadonlyArray<Account.Post>,
    services: Services
  ) => {
    const posts = accPosts.map((crop) => Post.init(crop, services));
    // services.ntmhub.accounts
    //   .account(account.id)
    //   .posts
    //   .data
    //   .murata_sca11h
    //   .latestReadings({}, ListOk, ListError, account.id);

    return new Loaded(
      account,
      posts
    );
  }

  public exit = (services: Services) => {
    this.posts.forEach((crop) => crop.deinit(services));
  }

  // public transitions = (services: Services) => [
  //   ...this.posts.reduce((acc, crop0) =>
  //     [...acc, ...Transitions.map<PostMessage, Loaded, Post>(crop0.transitions(services), (crop1) => {
  //       const posts = this.posts.map((crop) =>
  //         crop.info.id === crop1.info.id
  //           ? crop1
  //           : crop);
  //       return new Loaded(this.account, posts);
  //     })], [])
  // ]

  private constructor(
    public readonly account: Account,
    public readonly posts: ReadonlyArray<Post>
  ) { super(); }
}

// Types

// export type LoadedMessage
//   = Filter
//   | PostMessage;

export class Filter {
  constructor(readonly value: string) {}
}

// class ListOk {
//   constructor(
//     public readonly readins,
//     public readonly accountId: string
//   ) {}
// }

// class ListError {
//   constructor(
//     public readonly code: number,
//     public readonly accountId: string
//   ) {}
// }
