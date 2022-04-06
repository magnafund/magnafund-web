import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@crowdfunding/core";
import { UpdateImageComponent } from "@crowdfunding/donations";
import { ContainerComponent } from "@crowdfunding/layouts";
import { DashboardComponent, DonationsAddDashboardComponent, DonationsListDashboardComponent } from "@crowdfunding/ui";

const routes : Routes = [
  {
    path : 'auth',
    loadChildren: () => import('@crowdfunding/auth').then((a) => a.AuthModule)
  },
  {
    path: '',
    component: ContainerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path:'',
        component: DashboardComponent
      },
      {
        path:'donations',
        component: DonationsListDashboardComponent
      },
      {
        path:'donations/form',
        component: DonationsAddDashboardComponent
      },
      {
        path:'donations/form/:id',
        component: DonationsAddDashboardComponent
      },
      {
        path:'donations/update-image/:id',
        component: UpdateImageComponent
      },
    ]
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
