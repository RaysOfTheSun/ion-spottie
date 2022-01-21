import { createSelector } from '@ngrx/store';
import { userLibrarySelector } from './user-library.selector';

export const userSelectedPlaylistSelector = createSelector(
  userLibrarySelector,
  (userLibraryState) => userLibraryState.activePlaylist
);
