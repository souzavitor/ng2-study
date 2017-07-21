import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AlertModule } from 'ngx-bootstrap/alert';

import { FlashMessageComponent } from './flash-message.component';
import { FlashMessageService } from "./shared/flash-message.service";

@NgModule({
  imports: [
    AlertModule.forRoot(),
    CommonModule
  ],
  exports: [
    FlashMessageComponent
  ],
  declarations: [
    FlashMessageComponent
  ],
  providers: [
    FlashMessageService
  ],
})
export class FlashMessageModule { }
