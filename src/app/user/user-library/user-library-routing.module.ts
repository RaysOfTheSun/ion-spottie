import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataInitializerGuard } from '../providers/guards/user-data-initializer/user-data-initializer.guard';

import { UserLibraryPage } from './user-library.page';

const routes: Routes = [
  {
    path: '',
    component: UserLibraryPage,
    canActivate: [UserDataInitializerGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./user-library-overview/user-library-overview.module').then(
            ({ UserLibraryOverviewPageModule }) => UserLibraryOverviewPageModule
          )
      },
      {
        path: ':playlistId/overview',
        loadChildren: () =>
          import('./user-playlist-overview/user-playlist-overview.module').then(
            ({ UserPlaylistOverviewPageModule }) => UserPlaylistOverviewPageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLibraryPageRoutingModule {}
