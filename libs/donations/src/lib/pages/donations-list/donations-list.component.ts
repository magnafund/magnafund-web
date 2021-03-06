import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
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

  constructor(private donationsService: DonationsService, private activatedRoute : ActivatedRoute, private router : Router) { }

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
      this.donations = res.data.map((donation: any) => {
        console.log(moment(donation?.endDate).format('DD-MM-YYYY HH:mm'))
        donation.endDate = moment(donation?.endDate).format('DD-MM-YYYY HH:mm')
        return {
          ...donation, dateCreated: moment(donation?.dateCreated).format('DD-MM-YYYY HH:mm').split(" ")[0], 
          datePosted : moment(donation?.dateCreated).startOf('day').fromNow(),
          progress : ((donation?.amountRaised  / donation.amountGoal) * 100).toFixed(0)
        }
      })
    })
  }
  getFundraisingsByCategory(){
    const categories = []
    categories.push(this.activatedRoute.snapshot.params['categoryId'])
    this.donationsService.getDonationsByCategory(categories).subscribe((res: any) => {
      this.donations = res.data
    })
  }

  navigateToDetailPage(id: any){
    this.router.navigateByUrl(`donations/donation-detail/${id}`)
  }


}
