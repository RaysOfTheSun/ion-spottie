import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PlaylistOverviewHeaderComponent } from './playlist-overview-header.component';
import { PlaylistOverviewControlsModule } from '../playlist-overview-controls/playlist-overview-controls.module';

@NgModule({
  declarations: [PlaylistOverviewHeaderComponent],
  imports: [CommonModule, IonicModule, PlaylistOverviewControlsModule],
  exports: [PlaylistOverviewHeaderComponent]
})
export class PlaylistOverviewHeaderModule {}
