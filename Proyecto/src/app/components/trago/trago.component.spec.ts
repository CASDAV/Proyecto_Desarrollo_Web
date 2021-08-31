import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TragoComponent } from './trago.component';

describe('TragoComponent', () => {
  let component: TragoComponent;
  let fixture: ComponentFixture<TragoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TragoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TragoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
