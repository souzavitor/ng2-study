import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { TooltipModule } from 'ng2-bootstrap/tooltip';

import { PlaceIndexComponent } from './place-index/place-index.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceCreationComponent } from './place-creation/place-creation.component';

import { PlaceService } from './shared/place.service';

import { EmitterService } from '../../shared/emitter.service';

import { PlacesRoutes } from './places-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PlacesRoutes),
    TooltipModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCE9ixLA_qZ1U6miNBXdRdsn4S2Tcc7mkM',
      libraries: ['places', 'geometry', 'visualization'],
      language: 'pt-BR'
    })
  ],
  declarations: [
    PlaceIndexComponent,
    PlaceListComponent,
    PlaceCreationComponent
  ],
  providers: [
    PlaceService,
    EmitterService
  ],
})
export class PlacesModule { }
