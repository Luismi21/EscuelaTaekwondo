import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarNoticiasComponent } from './registrar-noticias.component';

describe('RegistrarNoticiasComponent', () => {
  let component: RegistrarNoticiasComponent;
  let fixture: ComponentFixture<RegistrarNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarNoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
