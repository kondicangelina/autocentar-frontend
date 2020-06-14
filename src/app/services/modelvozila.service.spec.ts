import { TestBed } from '@angular/core/testing';

import { ModelvozilaService } from './modelvozila.service';

describe('ModelvozilaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelvozilaService = TestBed.get(ModelvozilaService);
    expect(service).toBeTruthy();
  });
});
