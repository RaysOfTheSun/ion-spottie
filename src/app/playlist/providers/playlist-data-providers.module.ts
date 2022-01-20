import { ModuleWithProviders, NgModule } from '@angular/core';
import { PlaylistService } from './services/playlist/playlist.service';
import { PlaylistHttpDataService } from './services/playlist-http-data/playlist-http-data.service';
import { PlaylistDataInitializerGuard } from './guards/playlist-data-initializer/playlist-data-initializer.guard';

@NgModule({})
export class PlaylistDataProvidersModule {
  public static forRoot(): ModuleWithProviders<PlaylistDataProvidersModule> {
    return { ngModule: PlaylistDataProvidersModule, providers: [PlaylistService, PlaylistHttpDataService] };
  }

  public static forFeature(): ModuleWithProviders<PlaylistDataProvidersModule> {
    return { ngModule: PlaylistDataProvidersModule, providers: [PlaylistDataInitializerGuard] };
  }
}
