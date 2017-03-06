import { Component, EventEmitter, Output, Input, ViewChild } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap/modal';

@Component({
  selector: 'sg-confirm-modal',
  template: require('./confirm-modal.component.html'),
  exportAs: 'sg-confirm-modal'
})
export class ConfirmModalComponent {
  @Input() confirmText : string = 'OK';
  @Input() cancelText : string = 'cancel';
  @Input() title : string;
  @Input() message : string;

  @ViewChild('confirmModal') modal : ModalDirective;

  @Output() onConfirm : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onCancel : EventEmitter<boolean> = new EventEmitter<boolean>();

  public confirm($event : any) {
    this.onConfirm.emit(true);
  }
  public cancel($event : any) {
    this.onCancel.emit(true);
  }
}
