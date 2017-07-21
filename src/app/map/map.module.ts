import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { PanelComponent } from './panel/panel.component';

import { MapRoutingModule } from './map-routing.module';

@NgModule({
  declarations: [
    PanelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    MapRoutingModule
  ],
  providers: []
})
export class MapModule {}
