import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BehaviorSubject } from 'rxjs';
import { PlaylistService } from 'src/app/playlist/providers/services/playlist/playlist.service';
import { mockPlaylist } from 'src/app/playlist/testing/playlist-data.mocks';
import { playlistServiceStub } from 'src/app/playlist/testing/playlist-user-stubs';
import { userPlaylistSelectedAction } from '../../actions/user-playlist-selected.action';
import { userSelectedPlaylistRetrievedAction } from '../../actions/user-selected-playlist-retrieved.action';
import { initialUserLibraryState } from '../../constants/initial-user-library-state';
import { userSelectedPlaylistSelector } from '../../selectors/user-selected-playlist.selector';
import { SelectedPlaylistDataRetrievedEffect } from './selected-playlist-data-retrieved.effect';

let store: MockStore;
let effect: SelectedPlaylistDataRetrievedEffect;
let playlistService: PlaylistService;

const mockActionsSubj: BehaviorSubject<Action> = new BehaviorSubject(null);

describe('SelectedPlaylistDataRetrievedEffect', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: PlaylistService,
          useFactory: playlistServiceStub
        },
        provideMockStore({ initialState: initialUserLibraryState }),
        provideMockActions(() => mockActionsSubj),
        SelectedPlaylistDataRetrievedEffect
      ] as Provider[]
    });
    store = TestBed.inject(MockStore);
    effect = TestBed.inject(SelectedPlaylistDataRetrievedEffect);
    playlistService = TestBed.inject(PlaylistService);
  });

  it('should create an instance', () => {
    expect(effect).toBeTruthy();
  });

  describe('when dealing with USER_LIBRARY_PLAYLIST_SELECTED actions', () => {
    it('should retrieve the contents of the selected playlist', () => {
      spyOn(playlistService, 'getPlaylistContent').and.callThrough();
      store.overrideSelector(userSelectedPlaylistSelector, mockPlaylist);

      mockActionsSubj.next(userPlaylistSelectedAction({ playlist: mockPlaylist }));
      effect.loadSelectedPlaylistContent$.subscribe((respAction) => {
        expect(respAction).toEqual(userSelectedPlaylistRetrievedAction({ items: [] }));
        expect(playlistService.getPlaylistContent).toHaveBeenCalledWith(mockPlaylist);
      });
    });
  });
});
