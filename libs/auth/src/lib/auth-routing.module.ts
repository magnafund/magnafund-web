import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChangePasswordComponent } from "./pages/change-password/change-password.component";
import { ContainerComponent } from "./pages/container/container.component";
import { LoginComponent } from "./pages/login/login.component";
import { ResetPasswordComponent } from "./pages/reset-password/reset-password.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";


const routes : Routes = [
  {
    path : '',
    component : ContainerComponent,
    children : [
      { path: 'login', component: LoginComponent },
      {path : 'sign-up', component : SignUpComponent},
      {path : 'reset-password', component : ResetPasswordComponent},
      {path : 'change-password', component : ChangePasswordComponent},
      { path: '', pathMatch: 'full', redirectTo: 'login' },
    ]
  }
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class AuthRoutingModule{}
