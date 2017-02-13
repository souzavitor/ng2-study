import { Routes } from '@angular/router';

import { PanelComponent } from './panel/panel.component';
import { PlaceCreationComponent } from './places/place-creation/place-creation.component';
import { PlaceIndexComponent } from './places/place-index/place-index.component';

export const MapRoutes: Routes = [
  { path: '', component: PanelComponent },
  { path: 'places', component: PlaceIndexComponent }
];
