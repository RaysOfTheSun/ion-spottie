import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserLibraryPageRoutingModule } from './user-library-routing.module';

import { UserLibraryPage } from './user-library.page';
import { ContentPreviewCardModule } from 'src/app/ui-elements/content-preview-card/content-preview-card.module';
import { PageHeaderModule } from 'src/app/ui-elements/page-header/page-header.module';
import { PlaylistDataProvidersModule } from 'src/app/playlist/providers/playlist-data-providers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageHeaderModule,
    ContentPreviewCardModule,
    UserLibraryPageRoutingModule,
    PlaylistDataProvidersModule.forFeature()
  ],
  declarations: [UserLibraryPage]
})
export class UserLibraryPageModule {}
