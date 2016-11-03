import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { ShepherdModule } from 'angular2-shepherd-wrapper';

import { AppComponent } from './app.component';


@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShepherdModule
  ],
  providers: [
    
  ]
})
export class AppModule {}
