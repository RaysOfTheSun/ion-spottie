import { createSelector } from '@ngrx/store';
import { userLibrarySelector } from './user-library.selector';

export const userLibraryPlaylistsSelector = createSelector(
  userLibrarySelector,
  (appUserLibraryState) => appUserLibraryState.playlists
);
