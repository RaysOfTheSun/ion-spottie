import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, concatMap, tap } from 'rxjs/operators';
import { SpottiePlaylistItem } from '../../models/spottie-playlist-item.model';
import { SpottiePlaylist } from '../../models/spottie-playlist.model';
import { PlaylistHttpDataService } from '../playlist-http-data/playlist-http-data.service';

@Injectable()
export class PlaylistService {
  public readonly activePlaylistSubj: BehaviorSubject<SpottiePlaylist> = new BehaviorSubject(null);
  public readonly activePlaylistContentSubj: BehaviorSubject<SpottiePlaylistItem[]> = new BehaviorSubject([]);

  constructor(protected navController: NavController, protected playlistHttpDataService: PlaylistHttpDataService) {}

  public selectPlaylist(playlist: SpottiePlaylist, playlistOverviewPageRoute?: string[]): void {
    this.activePlaylistSubj.next(playlist);
    this.navController.navigateForward(playlistOverviewPageRoute);
  }

  get activePlaylist$(): Observable<SpottiePlaylist> {
    return this.activePlaylistSubj.asObservable();
  }

  get activePlaylistContent$(): Observable<SpottiePlaylistItem[]> {
    return this.activePlaylistContentSubj.asObservable();
  }

  public getPlaylistsById(ids: string[]): Observable<SpottiePlaylist[]> {
    return this.playlistHttpDataService.retrievePlaylistsById(...ids).pipe(catchError((err) => of([])));
  }

  public getAndCacheSelectedPlaylistContent(): Observable<SpottiePlaylistItem[]> {
    return this.activePlaylistSubj.pipe(
      concatMap((activePlaylist) =>
        activePlaylist
          ? this.playlistHttpDataService
              .retrievePlaylistContentByPlaylistId(activePlaylist.id)
              .pipe(tap((playlistContent) => this.activePlaylistContentSubj.next(playlistContent)))
          : of(null)
      ),
      tap((playlistContent) => this.activePlaylistContentSubj.next(playlistContent))
    );
  }
}
