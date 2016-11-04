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
    this.tour = this.ss.addTour('testTour', {
      defaults: {
        title: 'Hello',
        classes: "shepherd-theme-arrows"
      }
    })
    .addStep('id', {text: 'Hello', attachTo: '#test bottom'})
    .addStep('id 2', {text: 'Hello 2<br>Multiline', attachTo: '#test left'})
    .addStep('id 3', {text: 'Hello 3', attachTo: '#test right'})
    .addStep('id 4', {text: 'Hello 4', attachTo: '#test top'});

    this.tour.on("complete", () => {console.log("COMPLETED")});
  }

    private onClick() {
      this.tour.start();
    }
}
