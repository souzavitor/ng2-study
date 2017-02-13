import { Routes } from '@angular/router';

import { PanelComponent } from './panel/panel.component';

export const MapRoutes: Routes = [
  { path: '', component: PanelComponent },
  { path: 'places', loadChildren: './places/places.module#PlacesModule' }
];
