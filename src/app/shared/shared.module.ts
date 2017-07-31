import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttachmentComponent } from './attachment/attachment.component';
import { ModalComponent } from './modal/modal.component';
import { GlobalAttachmentComponent } from './global-attachment/global-attachment.component';
import { GlobalModalComponent } from './global-modal/global-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AttachmentComponent,
    ModalComponent,
    GlobalAttachmentComponent,
    GlobalModalComponent
  ],
  exports: [
    AttachmentComponent,
    ModalComponent,
    GlobalAttachmentComponent,
    GlobalModalComponent
  ],
  entryComponents: [

  ]
})
export class SharedBaseModule { }
