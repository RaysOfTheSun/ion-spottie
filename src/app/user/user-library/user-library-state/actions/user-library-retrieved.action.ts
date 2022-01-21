import { createAction, props } from '@ngrx/store';
import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';
import { UserLibraryStateAction } from '../constants/user-state-action.enum';

export const userLibraryRetrievedAction = createAction(
  UserLibraryStateAction.USER_LIBRARY_RETRIEVED,
  props<{ items: SpottiePlaylist[] }>()
);
