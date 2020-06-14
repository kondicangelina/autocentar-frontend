import { TestBed } from '@angular/core/testing';

import { KategorijauslugaService } from './kategorijausluga.service';

describe('KategorijauslugaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KategorijauslugaService = TestBed.get(KategorijauslugaService);
    expect(service).toBeTruthy();
  });
});
