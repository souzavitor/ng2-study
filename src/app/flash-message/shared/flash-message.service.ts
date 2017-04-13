import { Injectable, EventEmitter } from '@angular/core';

import { FlashMessage } from './flash-message';

@Injectable()
export class FlashMessageService {
  private defaultOptions = {
    text: '',
    type: 'success',
    timeout : 2500
  };

  text : string;

  updateShow : EventEmitter<FlashMessage> = new EventEmitter<FlashMessage>();

  show(text : string, options : any) : void {
    let defaults = this.defaultOptions;
    for (let attrname in options) {
      (<any>defaults)[attrname] = (<any>options)[attrname];
    }
    let message = new FlashMessage(text, defaults.type, defaults.timeout)
    this.updateShow.next(message);
  }
}