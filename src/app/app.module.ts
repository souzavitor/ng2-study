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

import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { AlertModule } from 'ng2-bootstrap/alert';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FlashMessageComponent } from './flash-message/flash-message.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './users/shared/auth.guard';
import { AuthService } from './users/shared/auth.service';

import { FlashMessageService } from './flash-message/shared/flash-message.service';

import { AppRoutes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    AdminComponent,
    FlashMessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,

    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    AuthService,
    FlashMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
