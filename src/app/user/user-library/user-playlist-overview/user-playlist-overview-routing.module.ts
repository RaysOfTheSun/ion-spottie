import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPlaylistOverviewPage } from './user-playlist-overview.page';

const routes: Routes = [
  {
    path: '',
    component: UserPlaylistOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPlaylistOverviewPageRoutingModule {}
