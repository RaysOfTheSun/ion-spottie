import { createSelector } from '@ngrx/store';
import { SpottieAppState } from 'src/app/core/models/spottie-app-state.model';

export const userLibraryStateSelector = createSelector(
  (state: SpottieAppState) => state.user,
  (user) => user.playlists
);
