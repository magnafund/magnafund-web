import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [CommonModule, RouterModule, ButtonModule],
  declarations: [
    ContainerComponent,
    SideMenuComponent,
    TopNavComponent
  ],
  exports: [
    SideMenuComponent,
    TopNavComponent,
    ContainerComponent,
    RouterModule
  ],
})
export class LayoutsModule {}
