import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { SpottieAppState } from 'src/app/core/models/spottie-app-state.model';
import { PlaylistService } from 'src/app/playlist/providers/services/playlist/playlist.service';
import { userSelectedPlaylistRetrievedAction } from '../../actions/user-selected-playlist-retrieved.action';
import { UserLibraryStateAction } from '../../constants/user-state-action.enum';
import { userLibraryPlaylistLoadedIndicatorSelector } from '../../selectors/user-library-playlist-loaded-indicator.selector';
import { userSelectedPlaylistDataSelector } from '../../selectors/user-selected-playlist-data.selector';
import { userSelectedPlaylistSelector } from '../../selectors/user-selected-playlist.selector';

@Injectable()
export class SelectedPlaylistDataRetrievedEffect {
  public readonly loadSelectedPlaylistContent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserLibraryStateAction.USER_LIBRARY_PLAYLIST_SELECTED),
      concatLatestFrom((_) => [
        this.store.select(userSelectedPlaylistSelector),
        this.store.select(userLibraryPlaylistLoadedIndicatorSelector),
        this.store.select(userSelectedPlaylistDataSelector)
      ]),
      concatMap(([_, activePlaylist, isPlaylistAlreadyLoaded, currPlaylistContent]) =>
        // TODO: handle playlist offloading when the user navigates out of the playlist overview screen
        isPlaylistAlreadyLoaded ? of(currPlaylistContent) : this.playlistService.getPlaylistContent(activePlaylist)
      ),
      map((playlistContent) => userSelectedPlaylistRetrievedAction({ items: playlistContent }))
    )
  );

  constructor(
    protected store: Store<SpottieAppState>,
    protected actions$: Actions,
    protected playlistService: PlaylistService
  ) {}
}
