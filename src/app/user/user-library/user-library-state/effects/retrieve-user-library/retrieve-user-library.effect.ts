import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map } from 'rxjs/operators';
import { PlaylistService } from 'src/app/playlist/providers/services/playlist/playlist.service';
import { userLibraryRetrievedAction } from '../../actions/user-library-retrieved.action';
import { UserLibraryStateAction } from '../../constants/user-state-action.enum';

@Injectable()
export class RetrieveUserLibraryEffect {
  public readonly loadUserLibrary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserLibraryStateAction.USER_LIBRARY_REQUESTED),
      concatMap((_) => this.playlistService.getPlaylistsById([])),
      map((playlists) => userLibraryRetrievedAction({ items: playlists }))
    )
  );

  constructor(protected store: Store, protected actions$: Actions, protected playlistService: PlaylistService) {}
}
