import { SpottieUserLibraryItem } from './spottie-user-library-item.model';

export interface SpottieUser {
  id: string;
  name: string;
  libraryItems: SpottieUserLibraryItem[];
}
