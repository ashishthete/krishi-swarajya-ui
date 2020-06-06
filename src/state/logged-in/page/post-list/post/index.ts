import { Services } from 'app/services';
import { Account } from 'app/services/krishi/model';

export class Post {
  public static init = (info: Account.Post, services: Services) => {
    return new Post(
      info
    );
  }

  public deinit = (services: Services) => {/**/};

  public transitions = (services: Services) => [];

  private constructor(
    public readonly info: Account.Post
  ) {}
}
