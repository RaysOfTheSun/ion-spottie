import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistDataInitializerGuard } from '../playlist/providers/guards/playlist-data-initializer/playlist-data-initializer.guard';
import { UserDataInitializerGuard } from './providers/guards/user-data-initializer/user-data-initializer.guard';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage,
    canActivate: [UserDataInitializerGuard],
    children: [
      {
        path: 'library',
        loadChildren: () => import('./user-library/user-library.module').then((m) => m.UserLibraryPageModule)
      },
      {
        path: 'playlist-overview',
        loadChildren: () =>
          import('./user-playlist-overview/user-playlist-overview.module').then(
            (m) => m.UserPlaylistOverviewPageModule
          ),
        canActivate: [PlaylistDataInitializerGuard]
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
