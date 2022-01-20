import { Component, Input, OnInit } from '@angular/core';
import { SpottiePlaylistItem } from '../providers/models/spottie-playlist-item.model';
import { SpottiePlaylist } from '../providers/models/spottie-playlist.model';

@Component({
  selector: 'app-playlist-overview',
  templateUrl: './playlist-overview.component.html',
  styleUrls: ['./playlist-overview.component.scss']
})
export class PlaylistOverviewComponent implements OnInit {
  @Input()
  playlistContent: SpottiePlaylistItem[] = [];

  @Input()
  playlist: SpottiePlaylist;

  constructor() {}

  ngOnInit() {}
}
