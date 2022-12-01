import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarActividadesDocenteComponent } from './form-agregar-actividades-docente.component';

describe('FormAgregarActividadesDocenteComponent', () => {
  let component: FormAgregarActividadesDocenteComponent;
  let fixture: ComponentFixture<FormAgregarActividadesDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAgregarActividadesDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAgregarActividadesDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
