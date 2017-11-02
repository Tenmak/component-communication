import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { SharedBaseModule } from 'app/shared/shared.module';

import { BaseComponent } from './base/base.component';
import { SecondComponent } from './second/second.component';

import { BaseLocalService } from './base/base.service';

@NgModule({
  imports: [
    MainRoutingModule,
    SharedBaseModule
  ],
  declarations: [
    BaseComponent,
    SecondComponent
  ],
  providers: [
    BaseLocalService
  ]
})
export class MainModule { }
