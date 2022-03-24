import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@crowdfunding/core";
import { ContainerComponent } from "@crowdfunding/layouts";

const routes : Routes = [
  {
    path : 'auth',
    loadChildren: () => import('@crowdfunding/auth').then((a) => a.AuthModule)
  },
  {
    path: '',
    component: ContainerComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'auth' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})

export class AppRoutingModule{}
