import { createReducer, on } from '@ngrx/store';
import { userLibraryRetrievedAction } from '../actions/user-library-retrieved.action';
import { userPlaylistSelectedAction } from '../actions/user-playlist-selected.action';
import { userSelectedPlaylistRetrievedAction } from '../actions/user-selected-playlist-retrieved.action';
import { initialUserLibraryState } from '../constants/initial-user-library-state';
import { userLibraryRetrievedReducer } from './user-library-library-loaded.reducer';
import { userPlaylistSelectedReducer } from './user-playlist-selected.reducer';
import { userSelectedPlaylistDataRetrievedReducer } from './user-selected-playlist-data-retrieved.reducer';

export const userLibraryReducers = createReducer(
  initialUserLibraryState,
  on(userLibraryRetrievedAction, userLibraryRetrievedReducer),
  on(userPlaylistSelectedAction, userPlaylistSelectedReducer),
  on(userSelectedPlaylistRetrievedAction, userSelectedPlaylistDataRetrievedReducer)
);
