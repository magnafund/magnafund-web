import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { AuthService, TokenService } from '@crowdfunding/core';

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
  providers: [AuthService, TokenService]
})
export class LayoutsModule {}
