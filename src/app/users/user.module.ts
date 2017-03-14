import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ConfirmModalComponent } from '../shared/components/confirm-modal.component';
import { EqualValidatorDirective } from '../shared/directives/equal-validator.directive';

import { UserIndexComponent } from './user-index/user-index.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

import { ModalModule } from 'ng2-bootstrap/modal';
import { TooltipModule } from 'ng2-bootstrap/tooltip';

import { UserService } from './shared/user.service';
import { EmitterService } from '../shared/emitter.service';

import { UserRoutes } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(UserRoutes)
  ],
  exports: [],
  declarations: [
    UserIndexComponent,
    UserFormComponent,
    UserListComponent,

    ConfirmModalComponent,
    EqualValidatorDirective
  ],
  providers: [
    EmitterService,
    UserService
  ],
})
export class UserModule { }
