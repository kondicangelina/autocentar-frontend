import { TestBed } from '@angular/core/testing';

import { KorisnikplService } from './korisnikpl.service';

describe('KorisnikplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KorisnikplService = TestBed.get(KorisnikplService);
    expect(service).toBeTruthy();
  });
});
