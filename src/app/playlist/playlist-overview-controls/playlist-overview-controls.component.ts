import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-overview-controls',
  templateUrl: './playlist-overview-controls.component.html',
  styleUrls: ['./playlist-overview-controls.component.scss']
})
export class PlaylistOverviewControlsComponent implements OnInit {
  @Input()
  downloaded: boolean;

  @Input()
  liked: boolean;

  @Input()
  totalLikes: number;

  @Input()
  totalRuntime: number;

  constructor() {}

  ngOnInit() {}
}
