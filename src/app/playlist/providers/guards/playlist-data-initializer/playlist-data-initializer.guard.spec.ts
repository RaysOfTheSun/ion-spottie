import { TestBed } from '@angular/core/testing';

import { PlaylistDataInitializerGuard } from './playlist-data-initializer.guard';

describe('PlaylistDataInitializerGuard', () => {
  let guard: PlaylistDataInitializerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PlaylistDataInitializerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
