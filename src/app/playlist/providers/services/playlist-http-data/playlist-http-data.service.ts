import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SpottiePlaylistItem } from '../../models/spottie-playlist-item.model';
import { SpottiePlaylist } from '../../models/spottie-playlist.model';

@Injectable()
export class PlaylistHttpDataService {
  constructor(protected httpClient: HttpClient) {}

  public retrievePlaylistsById(...ids: string[]): Observable<SpottiePlaylist[]> {
    return this.httpClient.get<SpottiePlaylist[]>('assets/core/data/user/mock-playlist-collection.json');
  }

  public retrievePlaylistContentByPlaylistId(id: string): Observable<SpottiePlaylistItem[]> {
    return this.httpClient
      .get<SpottiePlaylistItem[]>(`assets/core/data/playlists/playlist-${id}.json`)
      .pipe(catchError((_) => of([])));
  }
}
