import { Component } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  private index = 0;
  protected datas = [];
  protected delete = false;

  AddToAttachment() {
    this.datas.push('item_' + this.index);
    this.index++;
  }

  DeleteFromAttachment() {
    this.delete = !this.delete;
  }
}
