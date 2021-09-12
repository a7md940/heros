import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairsTogglerComponent } from './pairs-toggler.component';

describe('PairsTogglerComponent', () => {
  let component: PairsTogglerComponent;
  let fixture: ComponentFixture<PairsTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PairsTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PairsTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
