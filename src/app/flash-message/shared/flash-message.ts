import { FlashMessageInterface } from './flash-message.interface';

export class FlashMessage implements FlashMessageInterface {
  static nextId = 0;

  id : number = (FlashMessage.nextId++);
  text : string = '';
  type : string = '';
  timeout : number = 0;

  constructor(text?: string, type?: string, timeout? : number) {
    this.text = text;
    this.type = type;
    this.timeout = timeout;
  }
}