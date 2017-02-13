import { Component, Input } from '@angular/core';

import { MapsAPILoader } from 'angular2-google-maps/core';
import { Place } from '../shared/place.model';

@Component({
  selector: 'sg-place-widget',
  template: require('./place-index.component.html'),
  styles: [require('./place-index.component.scss')]
})
export class PlaceIndexComponent {
  private listId : string = 'place-list-id';
  private lastCoordinates : any = {};
  private places : Place[];

  constructor(private mapLoader: MapsAPILoader) {
    this.setCurrentPosition();
  }

  onUpdateList(places : Place[]) {
    this.places = places;
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lastCoordinates.latitude = position.coords.latitude;
        this.lastCoordinates.longitude = position.coords.longitude;
        this.lastCoordinates.zoom = 12;
      });
    }
  }
}
