import { Injectable } from '@angular/core';
import 'expose?Shepherd!tether-shepherd'

@Injectable()
export class ShepherdService {
  constructor() {
    console.log(Shepherd);
  }

}
