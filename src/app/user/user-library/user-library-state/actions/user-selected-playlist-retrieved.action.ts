import { createAction, props } from '@ngrx/store';
import { SpottiePlaylistItem } from 'src/app/playlist/providers/models/spottie-playlist-item.model';
import { UserLibraryStateAction } from '../constants/user-state-action.enum';

export const userSelectedPlaylistRetrievedAction = createAction(
  UserLibraryStateAction.USER_LIBRARY_PLAYLIST_DATA_RETRIEVED,
  props<{ items: SpottiePlaylistItem[] }>()
);
