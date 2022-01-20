import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationShellComponent } from './navigation-shell.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [NavigationShellComponent],
  imports: [IonicModule, CommonModule],
  exports: [NavigationShellComponent],
})
export class NavigationShellModule {}
