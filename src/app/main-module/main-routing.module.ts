import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './base/base.component';

const routes: Routes = [
  { path: '', redirectTo: '/base', pathMatch: 'full' },
  {
    path: 'base',
    component: BaseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MainRoutingModule { }
