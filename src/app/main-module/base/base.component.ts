import { Component } from '@angular/core';

import { BaseLocalService } from './base.service';

@Component({
  templateUrl: './base.component.html',
})
export class BaseComponent {
  toto = false;

  constructor(private baseLocalService: BaseLocalService) {
    this.baseLocalService.valeur = this.toto;
    setTimeout(() => {
      this.toto = true;
      this.baseLocalService.valeur = this.toto;
    }, 2000);
  }

}
