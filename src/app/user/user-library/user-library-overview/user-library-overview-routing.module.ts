import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLibraryOverviewPage } from './user-library-overview.page';

const routes: Routes = [
  {
    path: '',
    component: UserLibraryOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLibraryOverviewPageRoutingModule {}
