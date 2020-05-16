import { TestBed } from '@angular/core/testing';

import { Dtn209Service } from './dtn209.service';

describe('Dtn209Service', () => {
  let service: Dtn209Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dtn209Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
