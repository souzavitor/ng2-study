import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard {
  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  public canActivate() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}