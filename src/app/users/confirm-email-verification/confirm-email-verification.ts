import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sg-confirm-email-verification',
    styles: [require('./confirm-email-verification.scss')],
    template: require('./confirm-email-verification.html')
})

export class UserEmailVerificationComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}