import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'attach',
  templateUrl: './attachment.component.html',
})
export class AttachmentComponent implements OnChanges {
  @Input() datas: any[];
  @Input() delete: boolean;

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes['delete'] && changes['delete'].currentValue != null) {
      this.datas.pop();
    }
  }
}
