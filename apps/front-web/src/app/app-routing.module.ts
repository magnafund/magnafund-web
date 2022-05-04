import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";

const routes: Routes = [
    {
        path : 'donations',
        loadChildren: () => import('@crowdfunding/donations').then((a) => a.DonationsModule)
    },
    {
        path: '',
        component : HomePageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}