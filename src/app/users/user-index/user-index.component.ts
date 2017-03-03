import { Component } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'sg-user-index',
  template: require('./user-index.component.html'),
  styles: [require('./user-index.component.scss')]
})
export class UserIndexComponent {
  private listId : string = 'user-list-id';
  private user : User = new User();
}