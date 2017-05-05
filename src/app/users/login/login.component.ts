import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../shared/auth.service';
import { User } from '../shared/user.model';

import { FlashMessageService } from '../../flash-message/shared/flash-message.service';

@Component({
    selector: 'sg-login',
    template: require('./login.component.html'),
    styles: [require('./login.component.scss')]
})
export class LoginComponent implements OnInit {
  public user : User = new User();

  private loginLoading : boolean = false;
  private emailVerificationKey : string = '';

  constructor(
    private flashMessageService : FlashMessageService,
    private router : Router,
    private route : ActivatedRoute,
    private authService : AuthService
  ) {}

  public ngOnInit() {
    this.route.queryParams
      .map(params => params['verify_email'] || '')
      .subscribe(key => {
        this.authService.logout();
        if (key != '') {
          let msg = 'Login to complete your email verification';
          this.flashMessageService.show(msg, {type: 'info', timeout: 6000});
          this.emailVerificationKey = key;
        }
      });
  }

  public login() {
    this.loginLoading = true;
    this.authService.login(this.user)
      .subscribe(
        result => {
          this.loginLoading = false;
          AuthService.fillLocalStorage(result);
          if (this.emailVerificationKey == '') {
            this.router.navigate(['']);
          } else {
            this.router.navigate(['users/confirm-email-verification'], {
              queryParams: {key : this.emailVerificationKey}
            });
          }
        },
        err => {
          this.loginLoading = false;
          this.flashMessageService.show(err, {type: 'danger', timeout: 6000});
        }
      );
  }
}
