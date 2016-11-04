declare var require: any;
import Shepherd = require('tether-shepherd');

import { ShepherdStatic } from './interfaces';

import { Injectable } from '@angular/core';

@Injectable()
export class ShepherdService {
  public shepherd: ShepherdStatic;

  constructor() {
    this.shepherd = Shepherd as ShepherdStatic;
  }

  addTour(tour) {
    console.log('ayy');
  }

}
