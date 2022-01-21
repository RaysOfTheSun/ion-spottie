import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map } from 'rxjs/operators';
import { SpottieAppState } from 'src/app/core/models/spottie-app-state.model';
import { PlaylistService } from 'src/app/playlist/providers/services/playlist/playlist.service';
import { userSelectedPlaylistRetrievedAction } from '../../actions/user-selected-playlist-retrieved.action';
import { UserLibraryStateAction } from '../../constants/user-state-action.enum';
import { userSelectedPlaylistSelector } from '../../selectors/user-selected-playlist.selector';

@Injectable()
export class SelectedPlaylistDataRetrievedEffect {
  public readonly loadSelectedPlaylistContent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserLibraryStateAction.USER_LIBRARY_PLAYLIST_SELECTED),
      concatLatestFrom((_) => this.store.select(userSelectedPlaylistSelector)),
      concatMap(([_, activePlaylist]) => this.playlistService.getPlaylistContent(activePlaylist)),
      map((playlistContent) => userSelectedPlaylistRetrievedAction({ items: playlistContent }))
    )
  );

  constructor(
    protected actions$: Actions,
    protected store: Store<SpottieAppState>,
    protected playlistService: PlaylistService
  ) {}
}
