import { Component, Input, ViewChild, OnInit, OnChanges } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap/modal';

import { ConfirmModalComponent } from '../../shared/components/confirm-modal.component';

import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

import { EmitterService } from '../../shared/emitter.service';

@Component({
  selector: 'sg-user-list',
  template: require('./user-list.component.html'),
  styles: [require('./user-list.component.scss')]
})
export class UserListComponent implements OnInit, OnChanges {
  @Input() listId : string;

  @ViewChild('confirmModal') confirmModal : ConfirmModalComponent;

  private confirmTitle : string = 'Atention';
  private confirmMessage : string = '';

  private users : User[] = [];
  private user : User;

  private loggedUser : User;

  constructor(private userService : UserService) { }

  ngOnChanges() {
    EmitterService.get(this.listId).subscribe((user : any) => { this.loadUsers() });
  }

  ngOnInit() {
    this.loadUsers();
    this.loggedUser = new User();
    this.loggedUser._id = sessionStorage.getItem('user._id');
    this.loggedUser.email = sessionStorage.getItem('user.email');
    this.loggedUser.username = sessionStorage.getItem('user.username');
    this.loggedUser.name = sessionStorage.getItem('user.name');
  }

  removeUser($event: any, user : User) {
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