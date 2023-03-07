import { TestBed } from '@angular/core/testing';

import { GlosaryService } from './glosary.service';

describe('GlosaryService', () => {
  let service: GlosaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlosaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
