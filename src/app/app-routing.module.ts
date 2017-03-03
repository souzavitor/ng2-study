import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';

import { UserIndexComponent } from './users/user-index/user-index.component';

import { AdminComponent } from './admin/admin.component';

import { AuthGuard } from './users/shared/auth.guard';

export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'users', component: UserIndexComponent },
      { path: 'map', loadChildren: './map/map.module#MapModule' },
    ]
  },

  { path: '**', component: PageNotFoundComponent}
];
