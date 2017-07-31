import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { SharedBaseModule } from 'app/shared/shared.module';

import { BaseComponent } from './base/base.component';

@NgModule({
  imports: [
    MainRoutingModule,
    SharedBaseModule
  ],
  declarations: [
    BaseComponent
  ],
  exports: [

  ]
})
export class MainModule { }
