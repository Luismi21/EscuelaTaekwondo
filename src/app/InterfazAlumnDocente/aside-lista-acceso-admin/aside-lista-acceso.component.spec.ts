import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideListaAccesoComponent } from './aside-lista-acceso.component';

describe('AsideListaAccesoComponent', () => {
  let component: AsideListaAccesoComponent;
  let fixture: ComponentFixture<AsideListaAccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideListaAccesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideListaAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
