import { TestBed } from '@angular/core/testing';

import { OsiguranjeService } from './osiguranje.service';

describe('OsiguranjeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsiguranjeService = TestBed.get(OsiguranjeService);
    expect(service).toBeTruthy();
  });
});
