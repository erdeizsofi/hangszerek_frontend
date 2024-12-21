import { TestBed } from '@angular/core/testing';

import { JwtstoreService } from './jwtstore.service';

describe('JwtstoreService', () => {
  let service: JwtstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
