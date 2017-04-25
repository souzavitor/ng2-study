import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../users/shared/auth.service';

@Component({
    selector: 'sg-admin',
    template: require('./admin.component.html'),
    styles: [require('./admin.component.scss')]
})
export class AdminComponent {
  public isLoggedIn = false;

  constructor(private authService : AuthService, private router : Router) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(event : any) {
    event.preventDefault();
    let logout = this.authService.logout();
    if (logout) {
      this.router.navigate(['login']);
    }
  }
}
