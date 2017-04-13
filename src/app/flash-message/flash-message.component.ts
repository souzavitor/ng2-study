import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { FlashMessageInterface } from "./shared/flash-message.interface";
import { FlashMessage } from "./shared/flash-message";
import { FlashMessageService } from "./shared/flash-message.service";

@Component({
    selector: 'sg-flash-message',
    template: require('./flash-message.component.html'),
    styles: [require('./flash-message.component.scss')]
})
export class FlashMessageComponent {
  messages : FlashMessageInterface[] = [];
  classes : string = '';

  constructor(private flashMessageService : FlashMessageService, private ref : ChangeDetectorRef) {
    this.flashMessageService.updateShow.subscribe((message : FlashMessage) => {
      this.show(message);
    });
  }

  show(message : FlashMessage) : void {
    this.messages.push(message);
    window.setTimeout(() => {
      this.remove(message);
    }, message.timeout);
  }

  remove(message : FlashMessage) : void {
    this.messages = this.messages.filter((msg) => msg.id !== message.id);
  }
}