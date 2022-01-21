import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SpottiePlaylistItem } from 'src/app/playlist/providers/models/spottie-playlist-item.model';
import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';
import { PlaylistService } from 'src/app/playlist/providers/services/playlist/playlist.service';
import { AppUserLibraryState } from '../user-library-state/models/app-user-library-state.model';
import { userSelectedPlaylistDataSelector } from '../user-library-state/selectors/user-selected-playlist-data.selector';
import { userSelectedPlaylistSelector } from '../user-library-state/selectors/user-selected-playlist.selector';

@Component({
  selector: 'app-user-playlist-overview',
  templateUrl: './user-playlist-overview.page.html',
  styleUrls: ['./user-playlist-overview.page.scss']
})
export class UserPlaylistOverviewPage implements OnInit {
  public readonly currPlaylist$: Observable<SpottiePlaylist>;
  public readonly currPlaylistContent$: Observable<SpottiePlaylistItem[]>;

  constructor(protected playlistService: PlaylistService, protected store: Store<AppUserLibraryState>) {
    this.currPlaylist$ = this.store.select(userSelectedPlaylistSelector);
    this.currPlaylistContent$ = this.store.select(userSelectedPlaylistDataSelector);
  }

  ngOnInit() {}
}
