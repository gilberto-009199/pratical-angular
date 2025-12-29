import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bidirecional } from './bidirecional';

describe('Bidirecional', () => {
  let component: Bidirecional;
  let fixture: ComponentFixture<Bidirecional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bidirecional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bidirecional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
