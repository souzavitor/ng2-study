import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlaceIndexComponent } from './place-index/place-index.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: PlaceIndexComponent}
  ])],
  exports: [RouterModule],
})
export class PlaceRoutingModule { }
