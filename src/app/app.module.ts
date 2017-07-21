import { enableProdMode, NgModule } from '@angular/core';

if (process.env.ENV === 'production') {
  enableProdMode();
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlashMessageModule } from './flash-message/flash-message.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './users/login/login.component';

// shared components
import { CircleLoadingComponent } from "./shared/components/circle-loading/circle-loading.component";
import { LoadingButtonComponent } from "./shared/components/loading-button/loading-button.component";

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule }  from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    CircleLoadingComponent,
    LoadingButtonComponent
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

    HttpModule,
    JsonpModule,

    FlashMessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
