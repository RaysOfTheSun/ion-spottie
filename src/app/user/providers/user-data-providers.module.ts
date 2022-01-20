import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user/user.service';
import { UserDataInitializerGuard } from './guards/user-data-initializer/user-data-initializer.guard';
import { UserHttpDataService } from './services/user-http-data/user-http-data.service';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class UserDataProvidersModule {
  public static forRoot(): ModuleWithProviders<UserDataProvidersModule> {
    return {
      ngModule: UserDataProvidersModule,
      providers: [UserService, UserHttpDataService, UserDataInitializerGuard]
    };
  }
}
