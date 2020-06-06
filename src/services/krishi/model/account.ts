
export interface Account {
  id: string;
  name: string;
  username: string;
  role: Account.Role;
  sessionTimeout: number;
  twoFactorAuthentication: boolean;
  phone: string;
}

export namespace Account {
  export enum Role {
    OWNER = 'owner',
    ADMIN = 'admin',
    MEMBER = 'member'
  }

  export interface Crop {
    id: string;
    name: string;
    imageURL: string;
  }

  export interface Post {
    id: string;
    title: string;
    desc: string;
    imageURL: string;
    liked: null | boolean;
    comments: number;
  }
}
