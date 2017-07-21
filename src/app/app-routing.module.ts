import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';

import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', loadChildren: './admin/admin.module#AdminModule' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
