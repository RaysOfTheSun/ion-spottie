import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPlaylistOverviewPageRoutingModule } from './user-playlist-overview-routing.module';

import { UserPlaylistOverviewPage } from './user-playlist-overview.page';
import { PlaylistOverviewModule } from 'src/app/playlist/playlist-overview/playlist-overview.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PlaylistOverviewModule, UserPlaylistOverviewPageRoutingModule],
  declarations: [UserPlaylistOverviewPage]
})
export class UserPlaylistOverviewPageModule {}
