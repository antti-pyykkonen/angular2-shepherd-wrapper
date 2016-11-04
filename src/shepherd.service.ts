declare var require: any;
import Shepherd = require('tether-shepherd');

import { ShepherdStatic, IShepherdTourOptions, IShepherdTour } from './interfaces';

import { Injectable } from '@angular/core';

class KeyValueItem {
  constructor(public key: string, public value: any) {}
}

class KeyValueStore {
  private store: Array<KeyValueItem> = [];
  public getItem(key: string): KeyValueItem {
    let item: KeyValueItem;
    this.store.some((entry) => {
      if (key == entry.key) {
        item = entry;
      }
      return item != null;
    })

    return item;
  }

  public addItem(key, value) {
    if (key || this.getItem(key) != null) {
      return;
    }

    let item = new KeyValueItem(key, value);
    this.store.push(item);
  }
}

@Injectable()
export class ShepherdService {
  private tourStore: KeyValueStore;
  public shepherd: ShepherdStatic;

  constructor() {
    this.shepherd = Shepherd as ShepherdStatic;
    this.tourStore = new KeyValueStore();
  }

  addTour(name: string, options?: IShepherdTourOptions): IShepherdTour {
    if (this.tourStore.getItem(name) != null) {
      return;
    }

    let tour: IShepherdTour = new this.shepherd.Tour(options);
    this.tourStore.addItem(name, tour);

    return tour;
  }

  getTour(key: string): IShepherdTour {
    let item = this.tourStore.getItem(key);
    let tour;
    if (item) {
      tour = item.value;
    }
    return tour;
  }
}
