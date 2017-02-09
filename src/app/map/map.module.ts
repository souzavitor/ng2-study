import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PlaceListComponent } from './places/place-list/place-list.component';
import { SearchPlaceComponent } from './places/search-place/search-place.componet';

import { PanelComponent } from './panel/panel.component';

import { MapRoutes } from './map-routing.module';

@NgModule({
  declarations: [
    PanelComponent,
    PlaceListComponent,
    SearchPlaceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MapRoutes),
  ]
})
export class MapModule {}
