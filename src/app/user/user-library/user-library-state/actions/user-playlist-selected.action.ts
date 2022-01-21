import { createAction, props } from '@ngrx/store';
import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';
import { UserLibraryStateAction } from '../constants/user-state-action.enum';

export const userPlaylistSelectedAction = createAction(
  UserLibraryStateAction.USER_LIBRARY_PLAYLIST_SELECTED,
  props<{ playlist: SpottiePlaylist }>()
);
