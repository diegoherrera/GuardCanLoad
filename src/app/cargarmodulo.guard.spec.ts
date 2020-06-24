import { TestBed } from '@angular/core/testing';

import { CargarmoduloGuard } from './cargarmodulo.guard';

describe('CargarmoduloGuard', () => {
  let guard: CargarmoduloGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CargarmoduloGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
