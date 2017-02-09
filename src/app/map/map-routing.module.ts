import { Routes } from '@angular/router';

import { PanelComponent } from './panel/panel.component';
import { PlaceListComponent } from './places/place-list/place-list.component';

export const MapRoutes: Routes = [
  { path: '', component: PanelComponent },
  { path: 'places', component: PlaceListComponent }
];
