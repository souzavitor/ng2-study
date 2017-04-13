import { Component, OnInit } from '@angular/core';

import { FlashMessageService } from "../flash-message/shared/flash-message.service";

@Component({
  template: require('./home.component.html'),
  styles: [require('./home.component.scss')]
})
export class HomeComponent implements OnInit {
  constructor(private flashMessageService : FlashMessageService) {}

  ngOnInit() {
    let user = sessionStorage.getItem('user.name');
    this.flashMessageService.show('Welcome, ' + user + '!', { type: 'success', timeout : 5000 });
  }
}