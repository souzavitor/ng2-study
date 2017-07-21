import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../users/shared/auth.guard';

import { AdminComponent } from './admin.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: AdminComponent,
      canActivate: [AuthGuard],
      children: [
        { path: '', loadChildren: '../home/home.module#HomeModule' },
        { path: 'map', loadChildren: '../map/map.module#MapModule' },
        { path: 'users', loadChildren: '../users/user.module#UserModule' }
      ]
    }
  ])],
  exports: [RouterModule],
})
export class AdminRoutingModule { }