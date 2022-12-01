import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarNoticiasComponent } from './form-agregar-noticias.component';

describe('FormAgregarNoticiasComponent', () => {
  let component: FormAgregarNoticiasComponent;
  let fixture: ComponentFixture<FormAgregarNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAgregarNoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAgregarNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
