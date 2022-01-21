import { TestBed } from '@angular/core/testing';

import { UserSelectedPlaylistDataInitializerGuard } from './user-selected-playlist-data-initializer.guard';

describe('UserSelectedPlaylistDataInitializerGuard', () => {
  let guard: UserSelectedPlaylistDataInitializerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserSelectedPlaylistDataInitializerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
