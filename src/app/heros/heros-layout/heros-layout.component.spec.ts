import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosLayoutComponent } from './heros-layout.component';

describe('HerosLayoutComponent', () => {
  let component: HerosLayoutComponent;
  let fixture: ComponentFixture<HerosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerosLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
