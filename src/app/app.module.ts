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

import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutes } from './app-routing.module';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    DropdownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCE9ixLA_qZ1U6miNBXdRdsn4S2Tcc7mkM',
      libraries: ['places', 'geometry', 'visualization'],
      language: 'pt-BR'
    })
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
