import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { PanelComponent } from './panel/panel.component';

import { MapRoutes } from './map-routing.module';

@NgModule({
  declarations: [
    PanelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(MapRoutes)
  ],
  providers: []
})
export class MapModule {}
