import { AfterViewInit, Component, ElementRef, forwardRef, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import truthy from '../../helpers/functions/truthy.fn';
import removeWhiteSpace from '../../helpers/functions/remove-white-space.fn';
import isEmpty from '../../helpers/functions/is-empty.fn';

@UntilDestroy()
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInputComponent),
      multi: true
    }
  ]
})
export class SearchInputComponent implements OnInit, ControlValueAccessor, AfterViewInit {
  @ViewChild('inputField')
  inputField!: ElementRef<HTMLInputElement>;

  searchTerm$!: Observable<string>;

  propagateChange = (_: any) => { };

  focus = false;
  _value!: string | null;

  get value(): string | null {
    return this._value;
  }
  set value(val: string | null) {
    this._value = val;

    this.propagateChange(this._value);
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const onInput$ = fromEvent(this.inputField.nativeElement, 'input');
    this.searchTerm$ = onInput$.pipe(map((e: Event) => (e.target as HTMLInputElement).value));

    const resetValue = () => { this.value = null };
    const setValue = (x: string) => { this.value = x; };

    this.searchTerm$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        map(removeWhiteSpace),
        filter(truthy),
        untilDestroyed(this)
      )
      .subscribe(setValue);

    this.searchTerm$.pipe(filter(isEmpty), untilDestroyed(this)).subscribe(resetValue);
  }

  registerOnChange(fn: (x: any) => void): void {
    this.propagateChange = fn;

  }
  registerOnTouched(): void {

  }
  setDisabledState(): void {

  }
  writeValue(value: string): void {
    if (!value) {
      this.value = null;
    } else {
      this.value = value;
    }
  }
}
