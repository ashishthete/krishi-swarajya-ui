export interface Post {
    id: string;
    title: string;
    desc: string;
    imageURL: string;
    liked: null | boolean;
    comments: number;
  }