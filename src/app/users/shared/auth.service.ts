import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  private endpoint : string = process.env.API_HOST + '/api/v1/user/auth';

  constructor(private router : Router, private http : Http) { }
  
  public logout() {}
  public login(user : User) {
    console.log(user);
  }
  public isLoggedIn() {
    return false;
  }
}