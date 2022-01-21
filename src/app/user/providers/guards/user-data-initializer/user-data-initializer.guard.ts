import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../services/user/user.service';
import { userLibraryRequestedAction } from '../../state/actions/user-library-requested/user-librarby-requested.action';

@Injectable()
export class UserDataInitializerGuard implements CanActivate {
  constructor(protected store: Store) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(userLibraryRequestedAction());
    return of(true);
  }
}
