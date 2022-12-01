import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVerActividadesComponent } from './table-ver-actividades.component';

describe('TableVerActividadesComponent', () => {
  let component: TableVerActividadesComponent;
  let fixture: ComponentFixture<TableVerActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVerActividadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVerActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
