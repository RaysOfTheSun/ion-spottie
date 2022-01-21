import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { userLibraryRequestedAction } from 'src/app/user/user-library/user-library-state/actions/user-library-requested.action';

@Injectable()
export class UserDataInitializerGuard implements CanActivate {
  constructor(protected store: Store) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store.dispatch(userLibraryRequestedAction());

    return true;
  }
}
