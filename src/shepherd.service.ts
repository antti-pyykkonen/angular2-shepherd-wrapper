declare var require: any;
import Shepherd = require('tether-shepherd');

import { Injectable } from '@angular/core';

@Injectable()
export class ShepherdService {
  public shepherdInstance;

  constructor() {
    this.shepherdInstance = Shepherd;
    console.log(this.shepherdInstance);
  }

  addTour(tour) {

  }

}
