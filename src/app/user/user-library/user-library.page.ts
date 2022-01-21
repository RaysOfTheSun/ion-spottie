import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { SpottiePlaylist } from 'src/app/playlist/providers/models/spottie-playlist.model';
import { SpottieUserLibraryItem } from '../providers/models/spottie-user-library-item.model';
import { SpottieUser } from '../providers/models/spottie-user.model';
import { UserService } from '../providers/services/user/user.service';

@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.page.html',
  styleUrls: ['./user-library.page.scss']
})
export class UserLibraryPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
