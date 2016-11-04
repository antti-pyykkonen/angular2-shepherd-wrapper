declare var require: any;
import Shepherd = require('tether-shepherd');

import { Injectable } from '@angular/core';

@Injectable()
export class ShepherdService {
  public shepherd: TetherShepherd.ShepherdStatic;

  constructor() {
    this.shepherd = Shepherd;
  }

  addTour(tour: TetherShepherd.IShepherdTour) {
    console.log('ayy');
  }

}
