import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PlaylistOverviewHeaderModule } from '../playlist-overview-header/playlist-overview-header.module';
import { PlaylistOverviewControlsModule } from '../playlist-overview-controls/playlist-overview-controls.module';
import { PlaylistOverviewComponent } from './playlist-overview.component';
import { ContentPreviewCardModule } from 'src/app/ui-elements/content-preview-card/content-preview-card.module';

@NgModule({
  declarations: [PlaylistOverviewComponent],
  imports: [
    IonicModule,
    CommonModule,
    PlaylistOverviewHeaderModule,
    PlaylistOverviewControlsModule,
    ContentPreviewCardModule
  ],
  exports: [PlaylistOverviewComponent]
})
export class PlaylistOverviewModule {}
