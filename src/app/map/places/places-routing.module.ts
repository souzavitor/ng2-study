import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceIndexComponent } from './place-index/place-index.component';

export const PlacesRoutes : Routes = [
  { path: '', component: PlaceIndexComponent}
];
