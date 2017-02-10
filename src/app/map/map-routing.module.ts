import { Routes } from '@angular/router';

import { PanelComponent } from './panel/panel.component';
import { PlaceCreationComponent } from './places/place-creation/place-creation.component';
import { PlaceListComponent } from './places/place-list/place-list.component';

export const MapRoutes: Routes = [
  { path: '', component: PanelComponent },
  { path: 'places', component: PlaceListComponent },
  { path: 'places/create', component: PlaceCreationComponent }
];
