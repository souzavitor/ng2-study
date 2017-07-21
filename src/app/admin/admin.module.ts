import { NgModule } from '@angular/core';

import { AuthGuard } from '../users/shared/auth.guard'

// bootstrap components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { FlashMessageModule } from "../flash-message/flash-message.module";

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    FlashMessageModule,

    BsDropdownModule.forRoot()
  ],
  exports: [],
  declarations: [AdminComponent],
  providers: [
    AuthGuard
  ],
})
export class AdminModule { }