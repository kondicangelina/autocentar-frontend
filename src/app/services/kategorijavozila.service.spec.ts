import { TestBed } from '@angular/core/testing';

import { KategorijavozilaService } from './kategorijavozila.service';

describe('KategorijavozilaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KategorijavozilaService = TestBed.get(KategorijavozilaService);
    expect(service).toBeTruthy();
  });
});
