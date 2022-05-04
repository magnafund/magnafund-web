import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../models';
import { DonationsService } from '../../services/donations.service';

@Component({
  selector: 'crowdfunding-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories! : Category[];
  constructor(private donationsService: DonationsService, private router : Router) { }

  ngOnInit(): void {
    this.donationsService.getAllCategories().subscribe((res: any) => {
      this.categories = res.data
    })
  }

  navigateToCategory(id: any){
    this.router.navigateByUrl(`donations/${id}`)
  }

}
