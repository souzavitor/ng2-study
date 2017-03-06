import { enableProdMode } from '@angular/core';

if (WEBPACK_ENV === 'production') {
  enableProdMode();
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfirmModalComponent } from './shared/components/confirm-modal.component';

import { EqualValidatorDirective } from './shared/directives/equal-validator.directive';

import { ModalModule } from 'ng2-bootstrap/modal';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TooltipModule } from 'ng2-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { AdminComponent } from './admin/admin.component';

import { UserIndexComponent } from './users/user-index/user-index.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './users/shared/auth.guard';
import { AuthService } from './users/shared/auth.service';
import { UserService } from './users/shared/user.service';

import { EmitterService } from './shared/emitter.service';

import { AppRoutes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    AdminComponent,

    UserIndexComponent,
    UserFormComponent,
    UserListComponent,

    ConfirmModalComponent,

    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,

    TooltipModule.forRoot(),
    DropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    EmitterService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
