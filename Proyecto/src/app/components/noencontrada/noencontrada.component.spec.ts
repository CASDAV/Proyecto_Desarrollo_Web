import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoencontradaComponent } from './noencontrada.component';

describe('NoencontradaComponent', () => {
  let component: NoencontradaComponent;
  let fixture: ComponentFixture<NoencontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoencontradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoencontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
