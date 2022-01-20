import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage,
    children: [
      {
        path: 'library',
        loadChildren: () =>
          import('./user-library/user-library.module').then(
            (m) => m.UserLibraryPageModule
          )
      },
      {
        path: ':playlistId/overview',
        loadChildren: () =>
          import('./user-playlist-overview/user-playlist-overview.module').then(
            (m) => m.UserPlaylistOverviewPageModule
          )
      },
      {
        path: '',
        redirectTo: 'library',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule {}
