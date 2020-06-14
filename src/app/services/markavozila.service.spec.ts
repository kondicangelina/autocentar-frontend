import { TestBed } from '@angular/core/testing';

import { MarkavozilaService } from './markavozila.service';

describe('MarkavozilaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkavozilaService = TestBed.get(MarkavozilaService);
    expect(service).toBeTruthy();
  });
});
