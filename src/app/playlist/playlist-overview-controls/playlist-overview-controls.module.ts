import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PlaylistOverviewControlsComponent } from './playlist-overview-controls.component';

@NgModule({
  declarations: [PlaylistOverviewControlsComponent],
  imports: [IonicModule, CommonModule],
  exports: [PlaylistOverviewControlsComponent]
})
export class PlaylistOverviewControlsModule {}
