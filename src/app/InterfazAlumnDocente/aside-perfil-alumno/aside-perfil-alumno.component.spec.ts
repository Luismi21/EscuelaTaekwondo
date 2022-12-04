import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidePerfilAlumnoComponent } from './aside-perfil-alumno.component';

describe('AsidePerfilAlumnoComponent', () => {
  let component: AsidePerfilAlumnoComponent;
  let fixture: ComponentFixture<AsidePerfilAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsidePerfilAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsidePerfilAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
