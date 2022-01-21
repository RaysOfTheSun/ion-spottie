import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';
import { userPlaylistSelectedAction } from '../../../user-library-state/actions/user-playlist-selected.action';
import { userSelectedPlaylistSelector } from '../../../user-library-state/selectors/user-selected-playlist.selector';

@Injectable()
export class UserSelectedPlaylistDataInitializerGuard implements CanActivate {
  protected readonly currPlaylist$: Observable<SpottiePlaylist>;

  constructor(protected store: Store) {
    this.currPlaylist$ = this.store.select(userSelectedPlaylistSelector);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.currPlaylist$.pipe(
      tap((selectedPlaylist) => {
        if (!selectedPlaylist) {
          this.store.dispatch(
            userPlaylistSelectedAction({ playlist: { id: route.paramMap.get('playlistId') } as any })
          );
        }
      }),
      map(() => true)
    );
  }
}
