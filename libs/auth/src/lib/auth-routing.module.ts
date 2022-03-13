import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContainerComponent } from "./pages/container/container.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";


const routes : Routes = [
  {
    path : '',
    component : ContainerComponent,
    children : [
      { path: 'login', component: LoginComponent },
      {path : 'sign-up', component : SignUpComponent},
      { path: '', pathMatch: 'full', redirectTo: 'login' },
    ]
  }
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class AuthRoutingModule{}
