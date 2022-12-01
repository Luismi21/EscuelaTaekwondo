import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVerActividadesDocenteComponent } from './table-ver-actividades-docente.component';

describe('TableVerActividadesDocenteComponent', () => {
  let component: TableVerActividadesDocenteComponent;
  let fixture: ComponentFixture<TableVerActividadesDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVerActividadesDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVerActividadesDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
