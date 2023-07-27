import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunilComponent } from './sunil.component';

describe('SunilComponent', () => {
  let component: SunilComponent;
  let fixture: ComponentFixture<SunilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
