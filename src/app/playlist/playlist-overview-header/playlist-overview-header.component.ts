import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-overview-header',
  templateUrl: './playlist-overview-header.component.html',
  styleUrls: ['./playlist-overview-header.component.scss']
})
export class PlaylistOverviewHeaderComponent implements OnInit {
  @Input()
  coverImageUrl: string;

  @Input()
  playlistTitle: string;

  @Input()
  totalPlaylistLikes: number;

  @Input()
  downloaded: boolean;

  @Input()
  liked: boolean;

  @Input()
  totalRuntime: number;

  constructor() {}

  ngOnInit() {}
}
