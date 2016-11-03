import { NgModule, ModuleWithProviders, OpaqueToken, Optional, SkipSelf, Inject } from "@angular/core";

import { CommonModule } from '@angular/common';

import { ShepherdService } from './shepherd.service';


@NgModule({
    imports: [CommonModule],
    declarations: [],
    providers: [ShepherdService],
    exports: [CommonModule]
})
export class ShepherdModule {
  constructor () {}
}
