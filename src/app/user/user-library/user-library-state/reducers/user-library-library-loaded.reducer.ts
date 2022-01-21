import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';
import { AppUserLibraryState } from '../models/app-user-library-state.model';

export const userLibraryRetrievedReducer = (
  state: AppUserLibraryState,
  action: { items: SpottiePlaylist[] }
): AppUserLibraryState => ({
  ...state,
  playlists: action.items
});
