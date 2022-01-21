import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';
import { SpottieUser } from '../../providers/models/spottie-user.model';
import { UserState } from '../../providers/models/user-state.model';
import { UserService } from '../../providers/services/user/user.service';
import { userLibraryStateSelector } from '../../providers/state/selectors/user-libary-state.selector';

@Component({
  selector: 'app-user-library-overview',
  templateUrl: './user-library-overview.page.html',
  styleUrls: ['./user-library-overview.page.scss']
})
export class UserLibraryOverviewPage implements OnInit {
  public readonly currUser$: Observable<SpottieUser>;
  public readonly currUserLibraryContents$: Observable<SpottiePlaylist[]>;

  constructor(private userService: UserService, protected store: Store<any>) {
    this.currUser$ = this.userService.currUser$;
    this.currUserLibraryContents$ = this.store.select(userLibraryStateSelector);
  }

  ngOnInit() {}

  public handleLibraryItemClick(selectedPlaylist: SpottiePlaylist): void {
    this.userService.previewPlaylist(selectedPlaylist);
  }
}
