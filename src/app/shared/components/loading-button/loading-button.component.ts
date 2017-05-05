import { Component, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'sg-button',
  template: require('./loading-button.component.html'),
  styles: [require('./loading-button.component.scss')]
})
export class LoadingButtonComponent implements OnChanges {
  @Input() content : string = '';
  @Input() styleClasses : string[] = ['btn'];
  @Input() iconClasses : string[] = ['glyphicon'];
  @Input() buttonType : string = 'button';
  @Input() loadingColor : string = 'white';
  @Input() isLoading : boolean = false;

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if ("isLoading" in changes) {
      this.setLoading(changes.isLoading.currentValue);
    }
  }

  private setLoading(loading : boolean) {
    if (loading) {
      this.iconClasses.push('hidden');
    } else {
      this.iconClasses = this.iconClasses.filter((elem) => elem !== 'hidden');
    }
  }
}