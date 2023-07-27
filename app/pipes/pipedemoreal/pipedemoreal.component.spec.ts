import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipedemorealComponent } from './pipedemoreal.component';

describe('PipedemorealComponent', () => {
  let component: PipedemorealComponent;
  let fixture: ComponentFixture<PipedemorealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipedemorealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipedemorealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
