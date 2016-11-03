import { Component } from '@angular/core';

import { ShepherdService } from 'angular2-shepherd-wrapper';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor(private ss: ShepherdService) {}
}
