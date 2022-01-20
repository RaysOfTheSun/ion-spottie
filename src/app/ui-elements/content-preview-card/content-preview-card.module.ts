import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPreviewCardComponent } from './content-preview-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ContentPreviewCardComponent],
  imports: [IonicModule, CommonModule],
  exports: [ContentPreviewCardComponent]
})
export class ContentPreviewCardModule {}
