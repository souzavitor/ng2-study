import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmModalComponent } from "./confirm-modal.component";
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [ConfirmModalComponent],
  imports: [ CommonModule, ModalModule ],
  exports: [ ConfirmModalComponent ],
  providers: [],
  bootstrap: []
})
export class AppModalModule {}