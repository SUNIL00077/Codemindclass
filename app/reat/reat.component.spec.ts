import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReatComponent } from './reat.component';

describe('ReatComponent', () => {
  let component: ReatComponent;
  let fixture: ComponentFixture<ReatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
