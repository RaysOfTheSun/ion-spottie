import { createAction, props } from '@ngrx/store';
import { UserLibraryStateAction } from '../constants/user-state-action.enum';

export const userLibraryPlaylistContentRequested = createAction(
  UserLibraryStateAction.USER_LIBRARY_PLAYLIST_CONTENT_REQUESTED,
  props<{ playlistId: string }>()
);
