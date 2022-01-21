import { createSelector } from '@ngrx/store';
import { userLibrarySelector } from './user-library.selector';

export const userSelectedPlaylistDataSelector = createSelector(
  userLibrarySelector,
  (userLibraryState) => userLibraryState.activePlaylistItems
);
