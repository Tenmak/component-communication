import { Component } from '@angular/core';

import { GlobalService } from 'app/shared/services/global.service';

@Component({
  selector: 'global-modal',
  templateUrl: './global-modal.component.html',
})
export class GlobalModalComponent {
  private index = 0;

  constructor(
    private _globalService: GlobalService
  ) { }

  AddToAttachment() {
    this._globalService.addData('item_' + this.index);
    this.index++;
  }

  DeleteFromAttachment() {
    this._globalService.deleteData();
  }
}
