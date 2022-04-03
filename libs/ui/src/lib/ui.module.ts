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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/editor'
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {TooltipModule} from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';
import {DropdownModule} from 'primeng/dropdown';
import {ChartModule} from 'primeng/chart';
import { QtaSectionComponent } from './components/qta-section/qta-section.component';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  imports: [
    CommonModule, 
    ButtonModule, 
    ConfirmDialogModule, 
    ToastModule,
    CardModule,
    ToolbarModule,
    TableModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    InputNumberModule,
    InputTextModule,
    CalendarModule,
    TooltipModule,
    TagModule,
    DropdownModule,
    ChartModule,
    InputTextareaModule
  ], 
  declarations: [
    BannerComponent,
    DashboardComponent,
    DonationsListDashboardComponent,
    DonationsAddDashboardComponent,
    QtaSectionComponent,
    
  ],
  exports: [
    BannerComponent,
    DashboardComponent,
    DonationsListDashboardComponent,
    DonationsAddDashboardComponent,
    QtaSectionComponent,
    
  ],
  providers:[ConfirmationService]
})
export class UiModule {}
