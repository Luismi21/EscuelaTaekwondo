import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarActividadesComponent } from './form-agregar-actividades.component';

describe('FormAgregarActividadesComponent', () => {
  let component: FormAgregarActividadesComponent;
  let fixture: ComponentFixture<FormAgregarActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAgregarActividadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAgregarActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
