import { Services } from 'app/services';
import { Account } from 'app/services/krishi/model';

import { CropList } from './base';
import { Crop } from './crop';

// State

export class Loaded extends CropList {
  public static enter = (
    account: Account,
    accCrops: ReadonlyArray<Account.Crop>,
    services: Services
  ) => {
    const crops = accCrops.map((crop) => Crop.init(crop, services));
    // services.ntmhub.accounts
    //   .account(account.id)
    //   .crops
    //   .data
    //   .murata_sca11h
    //   .latestReadings({}, ListOk, ListError, account.id);

    return new Loaded(
      account,
      crops
    );
  }

  public exit = (services: Services) => {
    this.crops.forEach((crop) => crop.deinit(services));
  }

  public transitions = (services: Services) => [];

  // public transitions = (services: Services) => [
  //   ...this.crops.reduce((acc, crop0) =>
  //     [...acc, ...Transitions.map<CropMessage, Loaded, Crop>(crop0.transitions(services), (crop1) => {
  //       const crops = this.crops.map((crop) =>
  //         crop.info.id === crop1.info.id
  //           ? crop1
  //           : crop);
  //       return new Loaded(this.account, crops);
  //     })], [])
  // ]

  private constructor(
    public readonly account: Account,
    public readonly crops: ReadonlyArray<Crop>
  ) { super(); }
}

// Types

export type LoadedMessage
  = Filter;

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
