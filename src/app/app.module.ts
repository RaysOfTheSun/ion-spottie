import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, iosTransitionAnimation } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationShellModule } from './ui-elements/navigation-shell/navigation-shell.module';
import { UserDataProvidersModule } from './user/providers/user-data-providers.module';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistDataProvidersModule } from './playlist/providers/playlist-data-providers.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'md',
      rippleEffect: false,
      navAnimation: iosTransitionAnimation
    }),
    AppRoutingModule,
    HttpClientModule,
    NavigationShellModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    UserDataProvidersModule.forRoot(),
    PlaylistDataProvidersModule.forRoot()
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
