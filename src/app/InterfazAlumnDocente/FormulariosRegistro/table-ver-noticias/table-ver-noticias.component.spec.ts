import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVerNoticiasComponent } from './table-ver-noticias.component';

describe('TableVerNoticiasComponent', () => {
  let component: TableVerNoticiasComponent;
  let fixture: ComponentFixture<TableVerNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVerNoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVerNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
