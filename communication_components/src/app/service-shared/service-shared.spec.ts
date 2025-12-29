import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceShared } from './service-shared';

describe('ServiceShared', () => {
  let component: ServiceShared;
  let fixture: ComponentFixture<ServiceShared>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceShared]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceShared);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
