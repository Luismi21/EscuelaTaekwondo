import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarAlumnoDocenteComponent } from './form-agregar-alumno-docente.component';

describe('FormAgregarAlumnoDocenteComponent', () => {
  let component: FormAgregarAlumnoDocenteComponent;
  let fixture: ComponentFixture<FormAgregarAlumnoDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAgregarAlumnoDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAgregarAlumnoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
