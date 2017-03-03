import { Injectable } from '@angular/core';
import { Place } from './place.model';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PlaceService {
  private endpoint : string = process.env.API_HOST + '/api/v1/places';
  private reqOptions : RequestOptions = new RequestOptions();

  constructor(private http : Http) {
    let token = sessionStorage.getItem('user.token');
    this.reqOptions.headers = new Headers();
    this.reqOptions.headers.append('Authorization', 'JWT ' + token);
  }

  removePlace(place : Place) : Observable<Object> {
    return this.http.delete(this.endpoint + '/' + place._id, this.reqOptions)
      .map((res : Response) => { return {data : 'OK'}} )
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  savePlace(place : Place) : Observable<Place> {
    return this.http.post(this.endpoint, place, this.reqOptions)
      .map((res : Response) => res.json().data)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPlaces() : Observable<Place[]> {
    return this.http.get(this.endpoint, this.reqOptions)
      .map((res : Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}