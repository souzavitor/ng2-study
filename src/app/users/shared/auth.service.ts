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

  public login(user : User) {
    this.http
      .post(this.endpoint, {username: user.username, password: user.password})
      .map((res : Response) => res.json().data)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
      .subscribe(
        result => {
          sessionStorage.setItem('user._id', result._id);
          sessionStorage.setItem('user.email', result.email);
          sessionStorage.setItem('user.username', result.username);
          sessionStorage.setItem('user.name', result.name);
          sessionStorage.setItem('user.token', result.token);
          this.router.navigate(['']);
        },
        err => console.log(err)
      );
  }
  public isLoggedIn() {
    return !!sessionStorage.getItem('user.token');
  }
}
