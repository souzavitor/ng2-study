import { Injectable } from '@angular/core';
import { User } from './user.model';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
  private endpoint : string = process.env.API_HOST + '/api/v1/users';
  private reqOptions : RequestOptions = new RequestOptions();
  private token : string = '';

  constructor(private http : Http) {
    this.token = sessionStorage.getItem('user.token');
    this.reqOptions.headers = new Headers();
  }

  removeUser(user : User) : Observable<Object> {
    this.reqOptions.headers.set('Authorization', 'JWT ' + this.token);
    return this.http.delete(this.endpoint + '/' + user._id, this.reqOptions)
      .map((res : Response) => { return {data : 'OK'}} )
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUsers() : Observable<User[]> {
    this.reqOptions.headers.set('Authorization', 'JWT ' + this.token);
    return this.http.get(this.endpoint, this.reqOptions)
      .map((res : Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateUser(user : User) : Observable<User> {
    this.reqOptions.headers.set('Authorization', 'JWT ' + this.token);
    return this.http.put(this.endpoint + '/' + user._id, user, this.reqOptions)
      .map((res : Response) => res.json().data)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  sendEmailVerification(user : User) : Observable<User> {
    return this.http.post(this.endpoint + '/check-email-verification/' + user._id , user, this.reqOptions)
      .map((res : Response) => res.json().data)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveUser(user : User) : Observable<User> {
    return this.http.post(this.endpoint, user, this.reqOptions)
      .map((res : Response) => res.json().data)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}