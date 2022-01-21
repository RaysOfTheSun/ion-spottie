import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';
import { AppUserLibraryState } from '../models/app-user-library-state.model';

export const userPlaylistSelectedReducer = (
  state: AppUserLibraryState,
  { playlist }: { playlist: SpottiePlaylist }
): AppUserLibraryState => ({
  ...state,
  activePlaylist: playlist
});
