import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlumnoFormularioComponent } from './agregar-alumno-formulario.component';

describe('AgregarAlumnoFormularioComponent', () => {
  let component: AgregarAlumnoFormularioComponent;
  let fixture: ComponentFixture<AgregarAlumnoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlumnoFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
