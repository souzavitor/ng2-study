import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'map', loadChildren: './map/map.module#MapModule' },

  { path: '**', component: PageNotFoundComponent}
];
