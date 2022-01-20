import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPlaylistOverviewPageRoutingModule } from './user-playlist-overview-routing.module';

import { UserPlaylistOverviewPage } from './user-playlist-overview.page';
import { ContentPreviewCardModule } from 'src/app/ui-elements/content-preview-card/content-preview-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentPreviewCardModule,
    UserPlaylistOverviewPageRoutingModule
  ],
  declarations: [UserPlaylistOverviewPage]
})
export class UserPlaylistOverviewPageModule {}
