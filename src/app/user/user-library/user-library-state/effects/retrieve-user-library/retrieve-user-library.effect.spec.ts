import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaylistService } from 'src/app/playlist/providers/services/playlist/playlist.service';
import { playlistServiceStub } from 'src/app/playlist/testing/playlist-user-stubs';
import { RetrieveUserLibraryEffect } from './retrieve-user-library.effect';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { initialUserLibraryState } from '../../constants/initial-user-library-state';
import { BehaviorSubject } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { userLibraryRequestedAction } from '../../actions/user-library-requested.action';
import { userLibraryRetrievedAction } from '../../actions/user-library-retrieved.action';
import { SpottieAppState } from 'src/app/core/models/spottie-app-state.model';

let effect: RetrieveUserLibraryEffect;
let playlistService: PlaylistService;
const mockActionsSubj: BehaviorSubject<Action> = new BehaviorSubject(null);

describe('RetrieveUserLibraryEffect', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: PlaylistService,
          useFactory: playlistServiceStub
        },
        RetrieveUserLibraryEffect,
        provideMockStore({ initialState: initialUserLibraryState }),
        provideMockActions(() => mockActionsSubj)
      ] as Provider[]
    });

    effect = TestBed.inject(RetrieveUserLibraryEffect);
    playlistService = TestBed.inject(PlaylistService);
  });

  it('should create an instance', () => {
    expect(effect).toBeTruthy();
  });

  describe(`when handling USER_LIBRARY_REQUESTED actions`, () => {
    it('should retrieve the relevant library and return the correct retrieved action', () => {
      spyOn(playlistService, 'getPlaylistsById').and.callThrough();
      mockActionsSubj.next(userLibraryRequestedAction());

      effect.loadUserLibrary$.subscribe((respAction) => {
        expect(respAction).toEqual(userLibraryRetrievedAction({ items: [] }));
        expect(playlistService.getPlaylistsById).toHaveBeenCalled();
      });
    });
  });
});
