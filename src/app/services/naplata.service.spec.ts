import { TestBed } from '@angular/core/testing';

import { NaplataService } from './naplata.service';

describe('NaplataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NaplataService = TestBed.get(NaplataService);
    expect(service).toBeTruthy();
  });
});
