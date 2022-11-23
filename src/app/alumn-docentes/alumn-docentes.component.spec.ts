import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnDocentesComponent } from './alumn-docentes.component';

describe('AlumnDocentesComponent', () => {
  let component: AlumnDocentesComponent;
  let fixture: ComponentFixture<AlumnDocentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnDocentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
