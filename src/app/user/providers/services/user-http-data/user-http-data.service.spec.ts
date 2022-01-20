import { TestBed } from '@angular/core/testing';

import { UserHttpDataService } from './user-http-data.service';

describe('UserHttpDataService', () => {
  let service: UserHttpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHttpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
