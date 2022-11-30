import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVerAlumnosComponent } from './table-ver-alumnos.component';

describe('TableVerAlumnosComponent', () => {
  let component: TableVerAlumnosComponent;
  let fixture: ComponentFixture<TableVerAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVerAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVerAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
