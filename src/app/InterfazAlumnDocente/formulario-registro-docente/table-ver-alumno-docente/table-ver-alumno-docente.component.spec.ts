import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVerAlumnoDocenteComponent } from './table-ver-alumno-docente.component';

describe('TableVerAlumnoDocenteComponent', () => {
  let component: TableVerAlumnoDocenteComponent;
  let fixture: ComponentFixture<TableVerAlumnoDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVerAlumnoDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVerAlumnoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
