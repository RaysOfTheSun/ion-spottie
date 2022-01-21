import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { userLibraryReducers } from './reducers/user-library-reducers';
import { EffectsModule } from '@ngrx/effects';
import { RetrieveUserLibraryEffect } from './effects/retrieve-user-library/retrieve-user-library.effect';
import { SelectedPlaylistDataRetrievedEffect } from './effects/selected-playlist-data-retrieved/selected-playlist-data-retrieved.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('userLibrary', userLibraryReducers),
    EffectsModule.forFeature([RetrieveUserLibraryEffect, SelectedPlaylistDataRetrievedEffect])
  ]
})
export class UserLibraryStateModule {}
