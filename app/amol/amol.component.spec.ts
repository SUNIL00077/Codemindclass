import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmolComponent } from './amol.component';

describe('AmolComponent', () => {
  let component: AmolComponent;
  let fixture: ComponentFixture<AmolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
