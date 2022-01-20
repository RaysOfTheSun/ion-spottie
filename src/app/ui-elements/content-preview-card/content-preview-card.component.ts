import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-preview-card',
  templateUrl: './content-preview-card.component.html',
  styleUrls: ['./content-preview-card.component.scss']
})
export class ContentPreviewCardComponent implements OnInit {
  @Input()
  contentDesc: string;

  @Input()
  contentTitle: string;

  @Input()
  contentCoverArtUrl: string;

  @Input()
  contentCreators: string[];

  @Input()
  type: string;

  @Input()
  pinned: boolean;

  @Input()
  downloaded: boolean;

  constructor() {}

  ngOnInit() {}
}
