import { of } from 'rxjs';
import { SpottiePlaylist } from '../providers/models/spottie-playlist.model';

export const playlistServiceStub = () => ({
  getPlaylistsById: () => of([]),
  getPlaylistContent: (playlist: SpottiePlaylist) => of([])
});
