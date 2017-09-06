import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {
    path: '',
    component: OtherComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RepeatOrderRoutingModule { }
