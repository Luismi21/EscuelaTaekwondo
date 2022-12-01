import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideListaAccesoDocenteComponent } from './aside-lista-acceso-docente.component';

describe('AsideListaAccesoDocenteComponent', () => {
  let component: AsideListaAccesoDocenteComponent;
  let fixture: ComponentFixture<AsideListaAccesoDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideListaAccesoDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideListaAccesoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
