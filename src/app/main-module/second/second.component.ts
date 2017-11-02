import { Component, OnInit } from '@angular/core';

import { BaseLocalService } from './../base/base.service';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
})
export class SecondComponent {
  constructor(
    public baseLocalService: BaseLocalService
  ) { }
}
