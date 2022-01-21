import { SpottiePlaylistItem } from 'src/app/playlist/providers/models/spottie-playlist-item.model';
import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';

export interface AppUserLibraryState {
  playlists: SpottiePlaylist[];
  activePlaylist: SpottiePlaylist;
  activePlaylistItems: SpottiePlaylistItem[];
  areActivePlaylistItemsLoaded?: boolean;
}
