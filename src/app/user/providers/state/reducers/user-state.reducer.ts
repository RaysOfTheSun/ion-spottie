import { createReducer, on } from '@ngrx/store';
import { UserAction } from '../../constants/user-action.enum';
import { userLibraryLoadedAction } from '../actions/user-library-loaded/user-library-loaded.acction';
import { userLoggedInAction } from '../actions/user-loggged-in/user-logged-in.action';
import { defaultUserState } from '../initalizers/user-state.initializer';

export const userStateReducer = createReducer(
  defaultUserState,
  on(userLoggedInAction, (state, { loggedInUser }) => ({ ...state, ...loggedInUser })),
  on(userLibraryLoadedAction, (state, action) => {
    return { ...state, playlists: action.items };
  })
);
