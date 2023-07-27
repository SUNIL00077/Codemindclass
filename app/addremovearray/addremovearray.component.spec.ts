import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremovearrayComponent } from './addremovearray.component';

describe('AddremovearrayComponent', () => {
  let component: AddremovearrayComponent;
  let fixture: ComponentFixture<AddremovearrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddremovearrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddremovearrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
