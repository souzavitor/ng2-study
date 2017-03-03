import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { EmitterService } from '../../shared/emitter.service';

import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'sg-user-form',
    template: require('./user-form.component.html')
})
export class UserFormComponent {
  @Input() listId : string;
  @Input() user : User = new User();
  @Output() updateUser : EventEmitter<Object> = new EventEmitter<Object>();

  @ViewChild('userForm') userForm : any;

  constructor(private userService : UserService) { }

  public saveUser() {
    this.userService.saveUser(this.user)
      .subscribe((result : any) => {
        EmitterService.get(this.listId).emit({});
        this.userForm.reset();
      }, err => console.log(err));
  }
}