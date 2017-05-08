import { Component, EventEmitter, Output, Input, ViewChild, OnInit, OnChanges } from '@angular/core';

import { ConfirmModalComponent } from '../../../shared/components/modal/confirm-modal.component';

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

  @ViewChild('confirmModal') confirmModal : ConfirmModalComponent;

  private confirmTitle : string = 'Attention';
  private confirmMessage : string = '';

  private place : Place = new Place();
  private places : Place[] = [];

  constructor(private placeService : PlaceService) {}

  ngOnInit() {
    this.loadPlaces();
  }

  ngOnChanges() {
    EmitterService.get(this.listId).subscribe((places:Place[]) => this.loadPlaces() );
  }

  confirmRemovePlace(event : any, place : Place) {
    event.preventDefault();
    this.place = place;
    this.confirmMessage = 'Are you sure you want to remove the place "' + place.label + '"?';
    this.confirmModal.modal.show();
  }

  onRemoveCancel() {
    this.place = new Place();
    this.confirmModal.modal.hide();
  }

  onRemoveConfirm(place : Place) {
    this.placeService.removePlace(place)
      .subscribe(result => {
        this.loadPlaces();
        this.place = new Place();
        this.confirmModal.modal.hide();
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
