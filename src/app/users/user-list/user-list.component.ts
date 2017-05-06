import { Component, EventEmitter, Input, Output, ViewChild, OnInit, OnChanges } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ConfirmModalComponent } from '../../shared/components/confirm-modal.component';

import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

import { AuthService } from '../shared/auth.service';

import { EmitterService } from '../../shared/emitter.service';

@Component({
  selector: 'sg-user-list',
  template: require('./user-list.component.html'),
  styles: [require('./user-list.component.scss')]
})
export class UserListComponent implements OnInit, OnChanges {
  @Input() private listId : string;
  @Output() private onEditUser : EventEmitter<User> = new EventEmitter<User>();

  @ViewChild('confirmModal') confirmModal : ConfirmModalComponent;

  private confirmTitle : string = 'Atention';
  private confirmMessage : string = '';

  private users : User[] = [];
  private user : User = new User();
  private loggedUser : User;

  constructor(private userService : UserService) { }

  ngOnChanges() {
    EmitterService.get(this.listId)
      .subscribe(() => {
        this.loggedUser = AuthService.getLoggedUser();
        this.loadUsers();
      });
  }

  ngOnInit() {
    this.loadUsers();
    this.loggedUser = AuthService.getLoggedUser();
  }

  sendEmailVerification($event : any, user : User) {
    $event.preventDefault();
    this.userService.sendEmailVerification(user)
      .subscribe((result : any) => {
          this.loadUsers();
        },
        err => console.log(err)
      );
  }

  editUser($event : any, user : User) {
    $event.preventDefault();
    let clonedUser = Object.assign(new User(), user);
    this.onEditUser.emit(clonedUser);
  }

  confirmRemoveUser($event: any, user : User) {
    $event.preventDefault();
    this.user = user;
    this.confirmMessage = '<p>Are you sure you want to remove the user "' + user.name + '"?</p>';
    this.confirmModal.modal.show();
  }

  onRemoveConfirm() {
    this.userService.removeUser(this.user)
      .subscribe((result : any) => {
        this.loadUsers();
        this.user = new User;
        this.confirmModal.modal.hide();
      }, err => console.log(err));
      
  }

  onRemoveCancel() {
    this.user = new User();
    this.confirmModal.modal.hide();
  }

  public loadUsers() {
    this.userService.getUsers()
      .subscribe((result : any) => {
          this.users = result.data
        },
        err => console.log(err)
      );
  }
}