import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserLibraryOverviewPageRoutingModule } from './user-library-overview-routing.module';

import { UserLibraryOverviewPage } from './user-library-overview.page';
import { ContentPreviewCardModule } from 'src/app/ui-elements/content-preview-card/content-preview-card.module';
import { PageHeaderModule } from 'src/app/ui-elements/page-header/page-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageHeaderModule,
    ContentPreviewCardModule,
    UserLibraryOverviewPageRoutingModule
  ],
  declarations: [UserLibraryOverviewPage]
})
export class UserLibraryOverviewPageModule {}
