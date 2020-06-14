import { TestBed } from '@angular/core/testing';

import { TipvozilaService } from './tipvozila.service';

describe('TipvozilaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipvozilaService = TestBed.get(TipvozilaService);
    expect(service).toBeTruthy();
  });
});
