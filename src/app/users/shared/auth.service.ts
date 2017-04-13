import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {
  private endpoint : string = process.env.API_HOST + '/api/v1/users/authenticate';

  constructor(private router : Router, private http : Http) { }

  public logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  public login(user : User) : Observable<any> {
    return this.http
      .post(this.endpoint, {username: user.username, password: user.password})
      .map((res : Response) => res.json().data)
      .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  }

  public static getLoggedUser() : User {
    let loggedUser = new User();
    loggedUser._id = sessionStorage.getItem('user._id');
    loggedUser.email = sessionStorage.getItem('user.email');
    loggedUser.username = sessionStorage.getItem('user.username');
    loggedUser.name = sessionStorage.getItem('user.name');
    return loggedUser;
  }

  public static fillSessionStorage(user : User) {
    sessionStorage.setItem('user._id', user._id);
    sessionStorage.setItem('user.email', user.email);
    sessionStorage.setItem('user.username', user.username);
    sessionStorage.setItem('user.name', user.name);
    if (typeof user.token !== 'undefined') {
      sessionStorage.setItem('user.token', user.token);
    }
  }

  public isLoggedIn() {
    return !!sessionStorage.getItem('user.token');
  }
}
