import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AppModalModule } from '../../modal/app-modal.module';

import { AgmCoreModule } from '@agm/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { PlaceIndexComponent } from './place-index/place-index.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceCreationComponent } from './place-creation/place-creation.component';

import { PlaceService } from './shared/place.service';

import { EmitterService } from '../../shared/emitter.service';

import { PlaceRoutingModule } from './places-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppModalModule,

    PlaceRoutingModule,

    ModalModule.forRoot(),
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
