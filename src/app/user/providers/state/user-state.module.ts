import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserLibraryRequestedEffect } from './effects/user-library-requested/user-library-requested.effect';
import { userStateReducer } from './reducers/user-state.reducer';

@NgModule({
  imports: [StoreModule.forFeature('user', userStateReducer), EffectsModule.forFeature([UserLibraryRequestedEffect])]
})
export class UserStateModule {}
