import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../services/user/user.service';

@Injectable()
export class UserDataInitializerGuard implements CanActivate {
  constructor(protected userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userService
      .getAndCacheCurrUser()
      .pipe(map((retrievedUser) => !!retrievedUser));
  }
}
