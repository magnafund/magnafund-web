import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonModule } from 'primeng/button';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DonationsListDashboardComponent } from './components/donations-list-dashboard/donations-list-dashboard.component';
import { DonationsAddDashboardComponent } from './components/donations-add-dashboard/donations-add-dashboard.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule, 
    ButtonModule, 
    ConfirmDialogModule, 
    ToastModule,
    CardModule,
    ToolbarModule,
    TableModule,
    RouterModule
  ], 
  declarations: [
    BannerComponent,
    DashboardComponent,
    DonationsListDashboardComponent,
    DonationsAddDashboardComponent
  ],
  exports: [
    BannerComponent,
    DashboardComponent,
    DonationsListDashboardComponent,
    DonationsAddDashboardComponent
  ],
  providers:[ConfirmationService]
})
export class UiModule {}
