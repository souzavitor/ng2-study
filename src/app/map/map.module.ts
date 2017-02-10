import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { PlaceListComponent } from './places/place-list/place-list.component';
import { PlaceCreationComponent } from './places/place-creation/place-creation.component';

import { PanelComponent } from './panel/panel.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MapRoutes } from './map-routing.module';

@NgModule({
  declarations: [
    PanelComponent,
    PlaceListComponent,
    PlaceCreationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(MapRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCE9ixLA_qZ1U6miNBXdRdsn4S2Tcc7mkM',
      libraries: ['places', 'geometry', 'visualization'],
      language: 'pt-BR'
    })
  ]
})
export class MapModule {}
