import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcFeedback } from './imc-feedback';

describe('ImcFeedback', () => {
  let component: ImcFeedback;
  let fixture: ComponentFixture<ImcFeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImcFeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImcFeedback);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
