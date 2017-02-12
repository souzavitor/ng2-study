import { Component, ViewChild, NgZone, OnInit, Input, ElementRef } from '@angular/core';

import { MapsAPILoader } from 'angular2-google-maps/core';
import { Place } from '../shared/place.model';

import { PlaceService } from '../shared/place.service';
import { EmitterService } from '../../../shared/emitter.service';

declare var google : any;

@Component({
  selector: 'sg-place-creation',
  template: require('./place-creation.component.html'),
  styles: [require('./place-creation.component.scss')]
})
export class PlaceCreationComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public zoom: number;
  private autocomplete : any;

  private componentForm : any = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
  };

  private place : Place;

  @Input() listId : string;
  @Input() places : Place[];

  @ViewChild('search')
  public searchElementRef : ElementRef;

  constructor( 
    private mapLoader: MapsAPILoader,
    private placeService : PlaceService
  ) { }

  ngOnInit() {
    this.setCurrentPosition();
    this.initAutocomplete();
  }

  public savePlace(event : any) {
    event.preventDefault();
    this.searchElementRef.nativeElement.blur();
    if (!this.place) {
      return;
    }
    this.placeService.savePlace(this.place)
      .subscribe(result => {
        EmitterService.get(this.listId).emit(result);
        this.place = null;
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
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.zoom = 12;
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
    this.place = new Place(
      convertedPlace.route,
      convertedPlace.street_number,
      convertedPlace.postal_code,
      convertedPlace.country,
      convertedPlace.administrative_area_level_1,
      convertedPlace.locality,
      [place.geometry.location.lat(), place.geometry.location.lng()]
    );
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
