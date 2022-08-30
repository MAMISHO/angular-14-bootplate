import { TestBed } from '@angular/core/testing';

import { LoaderFileService } from './loader-file.service';

describe('LoaderFileService', () => {
  let service: LoaderFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
