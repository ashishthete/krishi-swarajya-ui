import { Services } from 'app/services';
import { Account } from 'app/services/krishi/model';

export class Crop {
  public static init = (patient: Account.Crop, services: Services) => {
    return new Crop(
      patient
    );
  }

  public deinit = (services: Services) => {/**/};

  public transitions = (services: Services) => [];

  private constructor(
    public readonly info: Account.Crop
  ) {}
}
