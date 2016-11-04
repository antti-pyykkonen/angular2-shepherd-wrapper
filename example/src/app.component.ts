import { Component } from '@angular/core';

import { ShepherdService } from 'angular2-shepherd-wrapper';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  tour;
  constructor(private ss: ShepherdService) {
    this.tour = new this.ss.shepherd.Tour({
      defaults: {
        classes: 'shepherd-theme-arrows',
        scrollTo: true
      }
    });

    this.tour.addStep('example-step', {
      text: 'This step is attached to the bottom of the <code>.example-css-selector</code> element.',
      attachTo: '#test bottom'
      });
    }

    private onClick() {
      this.tour.start();
    }
}
