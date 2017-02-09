import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { Places } from './mock-places';

@Injectable()
export class PlaceService {
  updatePlace(newPlace : Place) {
    Promise.resolve(Places)
      .then(places => places.find(place => place.id === newPlace.id))
      .then((place : Place) => place = newPlace);
  }
  savePlace(place : Place) {
    Places.push(place);
  }
  getPlaces() {
    return Promise.resolve(Places);
  }
  getPlace(id: number | string) {
    return Promise.resolve(Places)
      .then(places => places.find(place => place.id === +id));
  }
}