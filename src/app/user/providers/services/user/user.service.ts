import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SpottieUser } from '../../models/spottie-user.model';
import { UserHttpDataService } from '../user-http-data/user-http-data.service';
import { concatMap, map, tap } from 'rxjs/operators';
import { PlaylistService } from 'src/app/playlist/providers/services/playlist/playlist.service';
import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';

@Injectable()
export class UserService {
  protected currUserSubj: BehaviorSubject<SpottieUser> = new BehaviorSubject(null);
  protected currUserLibraryContentsSubj: BehaviorSubject<SpottiePlaylist[]> = new BehaviorSubject([]);

  constructor(protected userHttpDataService: UserHttpDataService, protected playlistService: PlaylistService) {}

  get currUser$(): Observable<SpottieUser> {
    return this.currUserSubj.asObservable();
  }

  public getCurrUserLibraryContents(): Observable<SpottiePlaylist[]> {
    return this.currUserLibraryContentsSubj.asObservable();
  }

  public previewPlaylist(playlist: SpottiePlaylist): void {
    this.playlistService.selectPlaylist(playlist, ['library', playlist.id, 'overview']);
  }

  public getAndCacheCurrUser(): Observable<boolean> {
    return this.userHttpDataService.getUserById('').pipe(
      tap((retrievedUser) => this.currUserSubj.next(retrievedUser)),
      concatMap((currUser) => this.playlistService.getPlaylistsById([])),
      tap((userLibraryContent) => this.currUserLibraryContentsSubj.next(userLibraryContent)),
      map(() => true)
    );
  }
}
