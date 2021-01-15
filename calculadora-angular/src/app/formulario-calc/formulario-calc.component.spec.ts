import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCalcComponent } from './formulario-calc.component';

describe('FormularioCalcComponent', () => {
  let component: FormularioCalcComponent;
  let fixture: ComponentFixture<FormularioCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
