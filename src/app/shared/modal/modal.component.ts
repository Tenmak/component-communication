import { Component } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  private index = 0;
  protected datas1 = [];
  protected delete1 = false;

  AddToAttachment() {
    this.datas1.push('item_' + this.index);
    this.index++;
  }

  DeleteFromAttachment() {
    this.delete1 = !this.delete1;
  }
}
