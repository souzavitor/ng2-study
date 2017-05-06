import { enableProdMode } from '@angular/core';

if (process.env.ENV === 'production') {
  enableProdMode();
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FlashMessageComponent } from './flash-message/flash-message.component';
import { CircleLoadingComponent } from "./shared/components/circle-loading/circle-loading.component";
import { LoadingButtonComponent } from "./shared/components/loading-button/loading-button.component";

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
    FlashMessageComponent,
    CircleLoadingComponent,
    LoadingButtonComponent
  ],
  imports: [
    BrowserAnimationsModule,
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
