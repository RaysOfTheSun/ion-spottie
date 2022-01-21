import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';
import { SpottieUserLibraryItem } from './spottie-user-library-item.model';

export interface UserState {
  id: string;
  name: string;
  playlists: SpottiePlaylist[];
  libraryMetadata: SpottieUserLibraryItem[];
}
