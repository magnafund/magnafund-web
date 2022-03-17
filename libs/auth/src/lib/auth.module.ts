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
import {ToastModule} from 'primeng/toast';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    NgxMaskModule.forRoot(maskConfig),
    ProgressSpinnerModule
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
    ContainerComponent,



  ],
  providers: [AuthService]
})
export class AuthModule {}
