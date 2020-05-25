import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineinfoComponent } from './engineinfo.component';

describe('EngineinfoComponent', () => {
  let component: EngineinfoComponent;
  let fixture: ComponentFixture<EngineinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
