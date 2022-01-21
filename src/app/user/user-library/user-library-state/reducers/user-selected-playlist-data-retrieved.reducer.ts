import { SpottiePlaylistItem } from 'src/app/playlist/providers/models/spottie-playlist-item.model';
import { AppUserLibraryState } from '../models/app-user-library-state.model';

export const userSelectedPlaylistDataRetrievedReducer = (
  state: AppUserLibraryState,
  { items }: { items: SpottiePlaylistItem[] }
): AppUserLibraryState => ({
  ...state,
  activePlaylistItems: items,
  areActivePlaylistItemsLoaded: !!items
});
