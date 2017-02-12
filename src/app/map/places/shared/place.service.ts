import { Injectable } from '@angular/core';
import { Place } from './place.model';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PlaceService {
  private endpoint : string = process.env.API_HOST + '/api/v1/places';

  constructor(private http : Http) {}

  removePlace(place : Place) : Observable<Object> {
    return this.http.delete(this.endpoint + '/' + place._id)
      .map((res : Response) => { return {data : 'OK'}} )
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  savePlace(place : Place) : Observable<Place> {
    return this.http.post(this.endpoint, place)
      .map((res : Response) => res.json().data)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPlaces() : Observable<Place[]> {
    return this.http.get(this.endpoint)
      .map((res : Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}