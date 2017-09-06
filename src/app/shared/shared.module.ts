import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalAttachmentComponent } from './global-attachment/global-attachment.component';
import { GlobalModalComponent } from './global-modal/global-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GlobalAttachmentComponent,
    GlobalModalComponent
  ],
  exports: [
    GlobalAttachmentComponent,
    GlobalModalComponent
  ],
  entryComponents: [

  ]
})
export class SharedBaseModule { }
