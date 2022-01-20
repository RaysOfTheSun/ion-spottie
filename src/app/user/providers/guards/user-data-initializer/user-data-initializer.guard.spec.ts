import { TestBed } from '@angular/core/testing';

import { UserDataInitializerGuard } from './user-data-initializer.guard';

describe('UserDataInitializerGuard', () => {
  let guard: UserDataInitializerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserDataInitializerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
