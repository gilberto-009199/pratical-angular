import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BComponent } from './bcomponent';

describe('BComponent', () => {
  let component: BComponent;
  let fixture: ComponentFixture<BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
