import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { UserAction } from '../../../constants/user-action.enum';
import { UserService } from '../../../services/user/user.service';

@Injectable()
export class UserLibraryRequestedEffect {
  public readonly loadUserLibrary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.USER_LIBRARY_REQUESTED),
      concatMap(() =>
        this.userService
          .getCurrUserLibraryContent()
          .pipe(map((playlists) => ({ type: UserAction.USER_LIBRARY_LOADED, items: playlists })))
      )
    )
  );
  constructor(protected actions$: Actions, protected userService: UserService) {}
}
