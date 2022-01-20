import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpottieUser } from '../../models/spottie-user.model';

@Injectable()
export class UserHttpDataService {
  constructor(protected httpClient: HttpClient) {}

  public getUserById(userId: string): Observable<SpottieUser> {
    return this.httpClient.get<SpottieUser>(
      'assets/core/data/user/mock-user-data.json'
    );
  }
}
