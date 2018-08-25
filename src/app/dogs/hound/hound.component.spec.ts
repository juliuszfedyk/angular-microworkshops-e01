import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoundComponent } from './hound.component';

describe('HoundComponent', () => {
  let component: HoundComponent;
  let fixture: ComponentFixture<HoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
