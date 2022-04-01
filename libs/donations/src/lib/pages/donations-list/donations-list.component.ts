import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models';
import { DonationsService } from '../../services/donations.service';

@Component({
  selector: 'crowdfunding-donations-list',
  templateUrl: './donations-list.component.html',
  styleUrls: ['./donations-list.component.scss']
})
export class DonationsListComponent implements OnInit {
    categories :any[] = [ ]
    isCategoryPage! : boolean;
    donations: any[] = []
    category!: Category;

  constructor(private donationsService: DonationsService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.donationsService.getAllCategories().subscribe((res :any) => {
      this.categories = res.data
      console.log(this.categories)
    })

    if(this.activatedRoute.snapshot.params['categoryId'] ){
      this.isCategoryPage = true    
      this.getFundraisingsByCategory()
      this.donationsService.getCategoryById(this.activatedRoute.snapshot.params['categoryId']).subscribe((res: any) => {
        this.category = res.data
      })
    } else {
      this.isCategoryPage = false
      this.getAllFundraisings()
    }

  }

  categoryFilter(){
    const selectedCategories = this.categories.filter(category => category.checked)
          .map((category) => category.id);
          this.donationsService.getDonationsByCategory(selectedCategories).subscribe((res: any) => {
            this.donations = res.data
          })

    
    // this.getDOnations(selectedCategories)
  }

  getAllFundraisings(){
    this.donationsService.getAllDonations().subscribe((res: any) => {
      this.donations = res.data
    })
  }
  getFundraisingsByCategory(){
    const categories = []
    categories.push(this.activatedRoute.snapshot.params['categoryId'])
    this.donationsService.getDonationsByCategory(categories).subscribe((res: any) => {
      this.donations = res.data
    })
  }

}
