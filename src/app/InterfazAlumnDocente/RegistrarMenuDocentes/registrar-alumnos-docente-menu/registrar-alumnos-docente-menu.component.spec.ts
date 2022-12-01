import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAlumnosDocenteMenuComponent } from './registrar-alumnos-docente-menu.component';

describe('RegistrarAlumnosDocenteMenuComponent', () => {
  let component: RegistrarAlumnosDocenteMenuComponent;
  let fixture: ComponentFixture<RegistrarAlumnosDocenteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAlumnosDocenteMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAlumnosDocenteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
