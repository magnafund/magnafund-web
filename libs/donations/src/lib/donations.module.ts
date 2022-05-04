import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopDonationsComponent } from './components/top-donations/top-donations.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';
import { DonationsListComponent } from './pages/donations-list/donations-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';
import { DonationDetailsComponent } from './pages/donation-details/donation-details.component';
import { ContributeComponent } from './pages/contribute/contribute.component';
import { InputTextModule } from 'primeng/inputtext';
import { UpdateImageComponent } from './pages/update-image/update-image.component';
import {ToastModule} from 'primeng/toast';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

const routes :Routes = [
  {
    path: '',
    component: DonationsListComponent
  },
  {
    path: ':categoryId',
    component: DonationsListComponent
  },
  {
    path: "donation-detail",
    children: [
      {
        path: ":id",
        component: DonationDetailsComponent
      }
    ]
    
  
  },
  {
    path: "contribute",
    children: [
      {
        path: ":id",
        component: ContributeComponent
      }
    ]
    
  },
  
   
]
@NgModule({
  imports: [
    CommonModule, 
    CardModule, 
    ButtonModule, 
    ProgressBarModule, 
    RouterModule.forChild(routes), 
    ToolbarModule, 
    CheckboxModule, 
    FormsModule,
    ChipModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ToastModule,
    HttpClientModule,
    FileUploadModule

  ],
  declarations: [
    TopDonationsComponent,
    CategoriesComponent,
    DonationsListComponent,
    DonationDetailsComponent,
    ContributeComponent,
    UpdateImageComponent
  ],
  exports: [
    TopDonationsComponent,
    CategoriesComponent,
    DonationsListComponent,
    DonationDetailsComponent,
    ContributeComponent
  ],
})
export class DonationsModule {}
