import { createSelector } from '@ngrx/store';
import { userLibrarySelector } from './user-library.selector';

export const userLibraryPlaylistLoadedIndicatorSelector = createSelector(
  userLibrarySelector,
  (userLibraryState) => !!userLibraryState.areActivePlaylistItemsLoaded
);
