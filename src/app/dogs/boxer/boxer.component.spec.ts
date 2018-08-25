import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxerComponent } from './boxer.component';

describe('BoxerComponent', () => {
  let component: BoxerComponent;
  let fixture: ComponentFixture<BoxerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
