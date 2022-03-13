import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ContainerComponent } from './pages/container/container.component';
import { AuthRoutingModule } from './auth-routing.module';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const authRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule


  ],
  declarations: [
    LoginComponent,
    SignUpComponent,
    ResetPasswordComponent,
    ContainerComponent
  ],
  exports: [
    LoginComponent,
    SignUpComponent,
    ResetPasswordComponent,
    ContainerComponent
  ],
})
export class AuthModule {}
