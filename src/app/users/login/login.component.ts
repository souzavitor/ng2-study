import { Component, ViewChild } from '@angular/core';

import { AuthService } from '../shared/auth.service';
import { User } from '../shared/user.model';

@Component({
    selector: 'sg-login',
    template: require('./login.component.html'),
    styles: [require('./login.component.scss')]
})
export class LoginComponent {
  public user : User = new User();

  constructor(private authService : AuthService) {}
  public login() {
    this.authService.login(this.user);
  }
}
