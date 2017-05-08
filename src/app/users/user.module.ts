import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AppModalModule } from '../modal/app-modal.module';

import { EqualValidatorDirective } from '../shared/directives/equal-validator.directive';

import { UserIndexComponent } from './user-index/user-index.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserEmailVerificationComponent } from './confirm-email-verification/confirm-email-verification';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { UserService } from './shared/user.service';
import { EmitterService } from '../shared/emitter.service';

import { UserRoutes } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule.forRoot(),
    AppModalModule,
    RouterModule.forChild(UserRoutes)
  ],
  exports: [],
  declarations: [
    UserIndexComponent,
    UserFormComponent,
    UserListComponent,
    UserEmailVerificationComponent,

    EqualValidatorDirective
  ],
  providers: [
    EmitterService,
    UserService
  ],
})
export class UserModule { }
