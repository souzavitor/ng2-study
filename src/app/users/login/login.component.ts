import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';
import { User } from '../shared/user.model';

import { FlashMessageService } from '../../flash-message/shared/flash-message.service';

@Component({
    selector: 'sg-login',
    template: require('./login.component.html'),
    styles: [require('./login.component.scss')]
})
export class LoginComponent {
  public user : User = new User();

  constructor(
    private flashMessageService : FlashMessageService,
    private router : Router,
    private authService : AuthService
  ) {}

  public login() {
    this.authService.login(this.user)
      .subscribe(
        result => {
          AuthService.fillSessionStorage(result);
          this.router.navigate(['']);
        },
        err => {
          this.flashMessageService.show(err, {type: 'danger', timeout: 6000});
        }
      );;
  }
}
