import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSelectedPlaylistDataInitializerGuard } from './guards/user-selected-playlist-data-initializer/user-selected-playlist-data-initializer.guard';

@NgModule({
  providers: [UserSelectedPlaylistDataInitializerGuard]
})
export class UserLibraryProvidersModule {}
