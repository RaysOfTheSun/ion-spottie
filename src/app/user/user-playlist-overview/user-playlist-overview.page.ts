import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpottiePlaylistItem } from 'src/app/playlist/providers/models/spottie-playlist-item.model';
import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';
import { PlaylistService } from 'src/app/playlist/providers/services/playlist/playlist.service';

@Component({
  selector: 'app-user-playlist-overview',
  templateUrl: './user-playlist-overview.page.html',
  styleUrls: ['./user-playlist-overview.page.scss']
})
export class UserPlaylistOverviewPage implements OnInit {
  public readonly currPlaylist$: Observable<SpottiePlaylist>;
  public readonly currPlaylistContent$: Observable<SpottiePlaylistItem[]>;

  constructor(protected playlistService: PlaylistService) {
    this.playlistService.activePlaylist$.subscribe(console.log);
    this.currPlaylist$ = this.playlistService.activePlaylist$;
    this.currPlaylistContent$ = this.playlistService.activePlaylistContent$;
  }

  ngOnInit() {}
}
