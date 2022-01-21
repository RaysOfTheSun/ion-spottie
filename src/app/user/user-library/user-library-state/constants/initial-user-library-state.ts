import { AppUserLibraryState } from '../models/app-user-library-state.model';

export const initialUserLibraryState: AppUserLibraryState = {
  playlists: [],
  activePlaylist: null,
  activePlaylistItems: []
};
