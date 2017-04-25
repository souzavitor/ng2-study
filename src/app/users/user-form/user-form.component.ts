import { Component, EventEmitter, Input, Output, OnChanges, ViewChild } from '@angular/core';

import { EmitterService } from '../../shared/emitter.service';

import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'sg-user-form',
    template: require('./user-form.component.html')
})
export class UserFormComponent implements OnChanges {
  @Input() listId : string;
  @Input() user : User = new User();

  @ViewChild('userForm') userForm : any;

  private disableUpdatePassword : boolean = false;
  private disableUpdateUsername : boolean = false;

  constructor(private userService : UserService) { }

  ngOnChanges(map : any) {
    if (typeof map.user !== 'undefined') {
      this.disableUpdatePassword = !!map.user.currentValue._id;
      this.disableUpdateUsername = !!map.user.currentValue._id;
    }
  }

  public saveUser() {
    if (typeof this.user._id !== 'undefined') {
      this.userService.updateUser(this.user)
        .subscribe((result : User) => {
          let loggedUser = AuthService.getLoggedUser();
          if (loggedUser.username === result.username) {
            AuthService.fillLocalStorage(result);
          }
          EmitterService.get(this.listId).emit({});
          this.user = new User();
          this.userForm.reset();
          this.disableUpdatePassword = false;
          this.disableUpdateUsername = false;
        }, err => console.log(err));
    } else {
      this.userService.saveUser(this.user)
        .subscribe((result : any) => {
          EmitterService.get(this.listId).emit({});
          this.user = new User();
          this.userForm.reset();
        }, err => console.log(err));
    }
  }
}