import { createAction, props } from '@ngrx/store';
import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';
import { UserAction } from '../../../constants/user-action.enum';

export const userLibraryLoadedAction = createAction(
  UserAction.USER_LIBRARY_LOADED,
  props<{ items: SpottiePlaylist[] }>()
);
