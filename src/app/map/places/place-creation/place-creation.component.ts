import { Component, EventEmitter, ViewChild, NgZone, OnInit, Input, ElementRef, Output } from '@angular/core';

import { MapsAPILoader } from '@agm/core';
import { Place } from '../shared/place.model';

import { PlaceService } from '../shared/place.service';
import { EmitterService } from '../../../shared/emitter.service';

declare var google : any;

@Component({
  selector: 'sg-place-form',
  template: require('./place-creation.component.html'),
  styles: [require('./place-creation.component.scss')]
})
export class PlaceCreationComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public zoom: number;

  private place : Place = new Place();
  private autocomplete : any;

  // the fields that we need from Google Place Object
  private componentForm : any = {
    street_number: 'short_name',
    route: 'long_name',
    administrative_area_level_2: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
  };

  @Input() listId : string;
  @Output() updateCoordinates : EventEmitter<Object> = new EventEmitter<Object>();

  @ViewChild('search') searchElementRef : ElementRef;
  @ViewChild('placeForm') placeForm : any;

  constructor(
    private mapLoader: MapsAPILoader,
    private placeService : PlaceService
  ) { }

  ngOnInit() {
    this.initAutocomplete();
  }

  savePlace() {
    this.searchElementRef.nativeElement.blur();
    if (!this.place.address) {
      return;
    }
    this.placeService.savePlace(this.place)
      .subscribe(result => {
        EmitterService.get(this.listId).emit(result);
        this.placeForm.reset();
        this.place = new Place();
        this.searchElementRef.nativeElement.value = '';
        this.searchElementRef.nativeElement.focus();
      }, err => console.log(err));
  }

  private initAutocomplete() {
    this.mapLoader.load().then(() => {
      this.autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {types: ['address']}
      );

      this.autocomplete.addListener('place_changed', () => {
        let place = this.autocomplete.getPlace();

        if (place.geometry === undefined || place.geometry === null) {
          return;
        }
        this.convertGooglePlace(place);
        this.updateCoordinates.emit({
          latitude : place.geometry.location.lat(),
          longitude : place.geometry.location.lng(),
          zoom : 12
        });
      });
    });
  }

  private convertGooglePlace(place : any) {
    let convertedPlace : any = {};
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (this.componentForm[addressType]) {
        var val = place.address_components[i][this.componentForm[addressType]];
        convertedPlace[addressType] = val;
      }
    }
    this.place.address = convertedPlace.route;
    this.place.number_address = convertedPlace.street_number;
    this.place.zip_code = convertedPlace.postal_code;
    this.place.country = convertedPlace.country;
    this.place.state = convertedPlace.administrative_area_level_1;
    this.place.city = convertedPlace.administrative_area_level_2;
    this.place.coordinates = [place.geometry.location.lat(), place.geometry.location.lng()];
  }
}
