import { Component } from '@angular/core';

import { AuthService } from '../users/shared/auth.service';

@Component({
    selector: 'sg-admin',
    template: require('./admin.component.html')
})
export class AdminComponent {
  public isLoggedIn = false;
  constructor(private authService : AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
  logout(event : any) {
    event.preventDefault();
    this.authService.logout();
  }
}
