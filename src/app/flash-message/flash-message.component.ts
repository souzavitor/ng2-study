import { Component, OnInit, ChangeDetectorRef, trigger, state, style } from '@angular/core';

import { FlashMessageInterface } from "./shared/flash-message.interface";
import { FlashMessage } from "./shared/flash-message";
import { FlashMessageService } from "./shared/flash-message.service";

@Component({
    selector: 'sg-flash-message',
    template: require('./flash-message.component.html'),
    styles: [require('./flash-message.component.scss')],
    animations: [
      trigger('fadeInOut', [
        state('out', style({
          'opacity': '0',
          'margin-top': '-25px',
        })),
        state('in', style({
          'opacity': '1',
          'margin-top': '0px',
        }))
      ])
    ]
})
export class FlashMessageComponent {
  messages : FlashMessageInterface[] = [];
  classes : string = '';

  private timeoutAnimation : number = 1000;

  constructor(private flashMessageService : FlashMessageService, private ref : ChangeDetectorRef) {
    this.flashMessageService.updateShow.subscribe((message : FlashMessage) => {
      this.show(message);
    });
  }

  show(message : FlashMessage) : void {
    this.messages.push(message);
    window.setTimeout(() => message.state = 'in', 100);
    window.setTimeout(() => {
      message.state = 'out';
      window.setTimeout(
        () => this.remove(message),
        this.timeoutAnimation
      );
    }, message.timeout);
  }

  remove(message : FlashMessage) : void {
    this.messages = this.messages.filter((msg) => msg.id !== message.id);
  }
}