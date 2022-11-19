import { TestBed } from '@angular/core/testing';

import { NextUserService } from './next-user.service';

describe('NextUserService', () => {
  let service: NextUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
