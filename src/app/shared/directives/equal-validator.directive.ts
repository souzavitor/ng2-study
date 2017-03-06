import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[sgValidateEqual][formControlName],[sgValidateEqual][formControl],[sgValidateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: EqualValidatorDirective, multi: true }
    ]
})
export class EqualValidatorDirective implements Validator {
  @Input() public sgValidateEqual: string;
  @Input() public reverse: string;

  private get isReverse() {
    if (!this.reverse) return false;
     return this.reverse === 'true' ? true: false;
  }
  validate(c: AbstractControl): { [key: string]: any } {
    // self value
    let v = c.value;
    // control vlaue
    let e = c.root.get(this.sgValidateEqual);
    // value not equal
    if (e && v !== e.value && !this.isReverse) {
      return {sgValidateEqual: true}
    }
    // value equal and reverse
    if (e && e.errors && v === e.value && this.isReverse) {
      delete e.errors['sgValidateEqual'];
      if (!Object.keys(e.errors).length) e.setErrors(null);
    }
    // value not equal and reverse
    if (e && v !== e.value && this.isReverse) {
      e.setErrors({ sgValidateEqual: true });
    }
    return null;
  }
}