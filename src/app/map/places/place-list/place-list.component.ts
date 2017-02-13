import { Component, EventEmitter, Output, Input, OnInit, OnChanges } from '@angular/core';

import { Place } from '../shared/place.model';
import { PlaceService } from '../shared/place.service';
import { EmitterService } from '../../../shared/emitter.service';

@Component({
  selector: 'sg-place-list',
  template: require('./place-list.component.html'),
  styles: [require('./place-list.component.scss')]
})
export class PlaceListComponent implements OnInit, OnChanges {
  @Input() listId : string;
  @Output() updateList : EventEmitter<Place[]> = new EventEmitter<Place[]>();

  private places : Place[] = [];

  constructor(private placeService : PlaceService) {}

  ngOnInit() {
    this.loadPlaces();
  }
  ngOnChanges() {
    EmitterService.get(this.listId).subscribe((places:Place[]) => { this.loadPlaces() });
  }

  removePlace(event : any, place : Place) {
    event.preventDefault();
    this.placeService.removePlace(place)
      .subscribe(result => {
        this.loadPlaces();
      }, err => console.log(err));
  }

  private loadPlaces() {
    this.placeService.getPlaces()
      .subscribe(
        (result : any) => {
          this.places = result.data
          this.updateList.emit(this.places);
        },
        err => console.log(err)
      );
  }
}
