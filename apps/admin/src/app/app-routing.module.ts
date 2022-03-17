import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes = [
  {
    path : 'auth',
    loadChildren: () => import('@crowdfunding/auth').then((a) => a.AuthModule)
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
