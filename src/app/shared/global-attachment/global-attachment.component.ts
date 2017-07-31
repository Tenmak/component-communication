import { Component } from '@angular/core';

import { GlobalService } from 'app/shared/services/global.service';

@Component({
  selector: 'global-attach',
  templateUrl: './global-attachment.component.html',
})
export class GlobalAttachmentComponent {
  constructor(
    private _globalService: GlobalService
  ) { }
}
