import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { PanelComponent } from './panel/panel.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: PanelComponent },
    { path: 'places', loadChildren: './places/places.module#PlacesModule' }
  ])],
  exports: [RouterModule],
})
export class MapRoutingModule { }