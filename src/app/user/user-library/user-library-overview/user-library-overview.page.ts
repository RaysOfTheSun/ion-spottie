import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';
import { SpottieUser } from '../../providers/models/spottie-user.model';
import { UserService } from '../../providers/services/user/user.service';

@Component({
  selector: 'app-user-library-overview',
  templateUrl: './user-library-overview.page.html',
  styleUrls: ['./user-library-overview.page.scss']
})
export class UserLibraryOverviewPage implements OnInit {
  public readonly currUser$: Observable<SpottieUser>;
  public readonly currUserLibraryContents$: Observable<SpottiePlaylist[]>;

  constructor(private userService: UserService, private navController: NavController) {
    this.currUser$ = this.userService.currUser$;
    this.currUserLibraryContents$ = this.userService.getCurrUserLibraryContents();
  }

  ngOnInit() {}

  public handleLibraryItemClick(selectedPlaylist: SpottiePlaylist): void {
    this.userService.previewPlaylist(selectedPlaylist);
  }
}
