import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbianceComponent } from './ambiance.component';

describe('AmbianceComponent', () => {
  let component: AmbianceComponent;
  let fixture: ComponentFixture<AmbianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
