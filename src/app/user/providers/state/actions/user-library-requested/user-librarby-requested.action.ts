import { createAction, props } from '@ngrx/store';
import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';
import { UserAction } from '../../../constants/user-action.enum';

export const userLibraryRequestedAction = createAction(UserAction.USER_LIBRARY_REQUESTED);
