import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlaylistService } from '../../services/playlist/playlist.service';

@Injectable()
export class PlaylistDataInitializerGuard implements CanActivate {
  constructor(protected playlistService: PlaylistService, protected router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.playlistService
      .getAndCacheSelectedPlaylistContent()
      .pipe(map((playlistContent) => (playlistContent ? !!playlistContent : this.router.createUrlTree(['/']))));
  }
}
