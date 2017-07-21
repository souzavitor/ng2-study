import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserIndexComponent } from './user-index/user-index.component';
import { UserEmailVerificationComponent } from './confirm-email-verification/confirm-email-verification';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: UserIndexComponent },
      { path: 'confirm-email-verification', component: UserEmailVerificationComponent}
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class UserRoutingModule { }
