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
import { FormsModule } from '@angular/forms';

const routes :Routes = [
  {
    path: '',
    component: DonationsListComponent
  }
]
@NgModule({
  imports: [CommonModule, CardModule, ButtonModule, ProgressBarModule, RouterModule.forChild(routes), ToolbarModule, CheckboxModule, FormsModule],
  declarations: [
    TopDonationsComponent,
    CategoriesComponent,
    DonationsListComponent
  ],
  exports: [
    TopDonationsComponent,
    CategoriesComponent,
    DonationsListComponent
  ],
})
export class DonationsModule {}
