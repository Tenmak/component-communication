import { NgModule } from '@angular/core';
import { RepeatOrderRoutingModule } from './repeat-order-routing.module';
import { SharedBaseModule } from 'app/shared/shared.module';

import { OtherComponent } from './other/other.component';

@NgModule({
  imports: [
    RepeatOrderRoutingModule,
    SharedBaseModule
  ],
  declarations: [
    OtherComponent
  ],
  exports: [

  ]
})
export class RepeatOrderModule { }
