import { TestBed } from '@angular/core/testing';

import { Banxico } from './banxico';

describe('Banxico', () => {
  let service: Banxico;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Banxico);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
