export interface Crop {
  id: string;
  name: string;
  comment: string;
  imageURL: string;
}

export namespace Crop {
  export enum Gender {
    MALE = 'male',
    FEMALE = 'female'
  }
}
