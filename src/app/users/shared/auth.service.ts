import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {
  private endpoint : string = process.env.API_HOST + '/api/v1/users/authenticate';

  constructor(private router : Router, private http : Http) { }

  public logout() : boolean {
    localStorage.clear();
    return true;
  }

  public login(user : User) : Observable<any> {
    return this.http
      .post(this.endpoint, {username: user.username, password: user.password})
      .map((res : Response) => res.json().data)
      .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  }

  public static getLoggedUser() : User {
    let loggedUser = new User();
    loggedUser._id = localStorage.getItem('user._id');
    loggedUser.email = localStorage.getItem('user.email');
    loggedUser.username = localStorage.getItem('user.username');
    loggedUser.name = localStorage.getItem('user.name');
    return loggedUser;
  }

  public static fillLocalStorage(user : User) {
    localStorage.setItem('user._id', user._id);
    localStorage.setItem('user.email', user.email);
    localStorage.setItem('user.username', user.username);
    localStorage.setItem('user.name', user.name);
    if (typeof user.token !== 'undefined') {
      localStorage.setItem('user.token', user.token);
    }
  }

  public isLoggedIn() {
    return !!localStorage.getItem('user.token');
  }
}
