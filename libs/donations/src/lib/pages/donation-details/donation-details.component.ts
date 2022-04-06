import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationsService } from '../../services/donations.service';
import * as moment from 'moment';


@Component({
  selector: 'crowdfunding-donation-details',
  templateUrl: './donation-details.component.html',
  styleUrls: ['./donation-details.component.scss']
})
export class DonationDetailsComponent implements OnInit {
  donation! : any;
  constructor(private activatedRoute : ActivatedRoute, private donationService : DonationsService, private router: Router) { }

  ngOnInit(): void {
    this.checkDonation()
  }

  checkDonation(){
    if(this.activatedRoute.snapshot.params['id']){
      this.donationService.getDonationsById(this.activatedRoute.snapshot.params['id']).subscribe((res: any) => {
        this.donation = res.data
        this.donation.progress = ((this.donation?.amountRaised  / this.donation.amountGoal) * 100).toFixed(0)
        this.donation.datePosted = moment(this.donation?.dateCreated).startOf('day').fromNow()
      })
    }
  }

  contribute(){
    this.router.navigateByUrl(`donations/contribute/${this.activatedRoute.snapshot.params['id']}`)
  }

}
