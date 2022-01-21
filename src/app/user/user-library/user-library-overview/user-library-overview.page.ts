import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';
import { SpottieUser } from '../../providers/models/spottie-user.model';
import { UserService } from '../../providers/services/user/user.service';
import { userPlaylistSelectedAction } from '../user-library-state/actions/user-playlist-selected.action';
import { userLibraryPlaylistsSelector } from '../user-library-state/selectors/user-library-playlist.selector';

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
    this.currUserLibraryContents$ = this.store.select(userLibraryPlaylistsSelector);
  }

  ngOnInit() {}

  public handleLibraryItemClick(selectedPlaylist: SpottiePlaylist): void {
    this.store.dispatch(userPlaylistSelectedAction({ playlist: selectedPlaylist }));
    this.userService.previewPlaylist(selectedPlaylist);
  }
}
