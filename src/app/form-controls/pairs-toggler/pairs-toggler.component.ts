import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-pairs-toggler',
  templateUrl: './pairs-toggler.component.html',
  styleUrls: ['./pairs-toggler.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PairsTogglerComponent),
      multi: true
    }
  ]
})
export class PairsTogglerComponent implements OnInit, ControlValueAccessor {
  static pairsCountInDom = 0;
  pairs!: any[];
  @Input('pairs')
  set setPairs(val: any[]) {
    this.pairs = val;
    this.value = this.pairs[0].value;
    console.log(this.value)
  }
  propagateChange = (_: any) => { };

  _value!: string | null;

  get value(): string | null {
    return this._value;
  }
  set value(val: string | null) {
    this._value = val;

    this.propagateChange(this._value);
  }
  id!: number;

  constructor() {
    this.id = PairsTogglerComponent.pairsCountInDom;
    PairsTogglerComponent.pairsCountInDom++;
  }

  ngOnInit(): void {
  }

  registerOnChange(fn: (x: any) => void) {
    this.propagateChange = fn;

  }
  registerOnTouched() {

  }
  setDisabledState() {

  }
  writeValue(value: any) {
    if (value == null) {
      this.value = null;
    } else {
      this.value = value.value;
    }
  }

  onChange(): void {
    const [firstItem, secondItem] = this.pairs;
    if (!this.value) {
      this.value = firstItem.value;
      return;
    }

    if (this.value == secondItem.value) {
      this.value = null;
      return;
    }

    if (this.value == firstItem.value) {
      this.value = secondItem.value;
    } else {
      this.value = firstItem.value;
    }
  }
}
