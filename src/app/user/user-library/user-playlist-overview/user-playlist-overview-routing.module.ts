import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistDataInitializerGuard } from 'src/app/playlist/providers/guards/playlist-data-initializer/playlist-data-initializer.guard';

import { UserPlaylistOverviewPage } from './user-playlist-overview.page';

const routes: Routes = [
  {
    path: '',
    component: UserPlaylistOverviewPage,
    canActivate: [PlaylistDataInitializerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPlaylistOverviewPageRoutingModule {}
