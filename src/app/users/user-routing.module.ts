import { Routes } from '@angular/router';

import { UserIndexComponent } from './user-index/user-index.component';
import { UserEmailVerificationComponent } from './confirm-email-verification/confirm-email-verification';

export const UserRoutes : Routes = [
  { path: '', component: UserIndexComponent },
  { path: 'confirm-email-verification', component: UserEmailVerificationComponent}
];
