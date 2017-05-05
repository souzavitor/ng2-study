import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'sg-circle-loading',
  template: `
    <div [ngClass]="circleClasses">
      <div class="sk-circle1 sk-child"></div>
      <div class="sk-circle2 sk-child"></div>
      <div class="sk-circle3 sk-child"></div>
      <div class="sk-circle4 sk-child"></div>
      <div class="sk-circle5 sk-child"></div>
      <div class="sk-circle6 sk-child"></div>
      <div class="sk-circle7 sk-child"></div>
      <div class="sk-circle8 sk-child"></div>
      <div class="sk-circle9 sk-child"></div>
      <div class="sk-circle10 sk-child"></div>
    </div>
  `,
  styles: [require('./circle-loading.component.scss')]
})
export class CircleLoadingComponent implements OnInit, OnChanges {
  @Input() color : string = 'gray';
  @Input() visibility : string = 'shown';
  @Input() size : string = 'sm';

  private circleClasses : any = {};

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if ("visibility" in changes && "previousValue" in changes.visibility) {
      this.setVisibility(changes.visibility.currentValue);
    }
  }

  ngOnInit() {
    this.circleClasses['sk-circle'] = true;
    this.circleClasses[this.color + '-circle'] = true;
    this.circleClasses[this.visibility] = true;
    this.circleClasses[this.size + '-circle'] = true;
  }

  setVisibility(visibility : string) {
    let olderVisibility = this.visibility === 'shown' ? 'hide-circle' : 'shown';
    this.circleClasses[this.visibility] = true;
    this.circleClasses[olderVisibility] = false;
  }

  toggleVisibility() {
    let olderVisibility = this.visibility;
    this.visibility = this.visibility === 'shown' ? 'hide-circle' : 'shown';
    this.circleClasses[olderVisibility] = false;
    this.circleClasses[this.visibility] = true;
  }
}
