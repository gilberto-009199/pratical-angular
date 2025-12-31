import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemLogisticoComponent } from './sistem-logistico-component';

describe('SistemLogisticoComponent', () => {
  let component: SistemLogisticoComponent;
  let fixture: ComponentFixture<SistemLogisticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemLogisticoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemLogisticoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
