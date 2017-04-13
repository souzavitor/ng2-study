import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../shared/user.service';;

@Component({
  selector: 'sg-confirm-email-verification',
  styles: [require('./confirm-email-verification.scss')],
  template: require('./confirm-email-verification.html')
})

export class UserEmailVerificationComponent implements OnInit {
  isConfirming = true;
  isNotConfirmed = false;
  isConfirmed = false;

  constructor(private route: ActivatedRoute, private userService : UserService, private router : Router) { }

  ngOnInit() {
    let token = this.route.queryParams
      .map(params => params['token'] || '')
      .subscribe(token => {
        this.userService.checkEmailVerification(token)
          .subscribe(() => {
            this.isConfirming = false;
            this.isConfirmed = true;
            window.setTimeout(() => {
              this.router.navigate(['/']);
            }, 3000);
          }, () => {
            this.isConfirming = false;
            this.isNotConfirmed = true;
          });
      });
  }
}