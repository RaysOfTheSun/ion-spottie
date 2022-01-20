import { TestBed } from '@angular/core/testing';

import { PlaylistHttpDataService } from './playlist-http-data.service';

describe('PlaylistHttpDataService', () => {
  let service: PlaylistHttpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistHttpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
