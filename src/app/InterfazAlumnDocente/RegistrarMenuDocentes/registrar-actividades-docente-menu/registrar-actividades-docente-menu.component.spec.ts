import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarActividadesDocenteMenuComponent } from './registrar-actividades-docente-menu.component';

describe('RegistrarActividadesDocenteMenuComponent', () => {
  let component: RegistrarActividadesDocenteMenuComponent;
  let fixture: ComponentFixture<RegistrarActividadesDocenteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarActividadesDocenteMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarActividadesDocenteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
