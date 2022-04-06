import { Component, OnInit } from '@angular/core';
import { Donation } from '../../models/donation';
import { DonationsService } from '../../services/donations.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdfunding-top-donations',
  templateUrl: './top-donations.component.html',
  styleUrls: ['./top-donations.component.scss']
})
export class TopDonationsComponent implements OnInit {

  constructor(private donationService: DonationsService, private router : Router) { }
  donations!: any[];

  ngOnInit(): void {
    this.getDonations()
  }

  getDonations() {
    this.donationService.getTopDonations().subscribe((res: any) => {
      // this.donations = res.data
      console.log(this.donations)
      this.donations = res.data.map((donation: any) => {
        console.log(moment(donation?.endDate).format('DD-MM-YYYY HH:mm'))
        donation.endDate = moment(donation?.endDate).format('DD-MM-YYYY HH:mm')
        return {
          ...donation, dateCreated: moment(donation?.dateCreated).format('DD-MM-YYYY HH:mm').split(" ")[0], 
          datePosted : moment(donation?.dateCreated).startOf('day').fromNow(),
          progress : ((donation?.amountRaised  / donation.amountGoal) * 100).toFixed(0)
        }
      })

      console.log(this.donations)
    })
  }

  navigateToDetailPage(id: any){
    this.router.navigateByUrl(`donations/donation-detail/${id}`)
  }

}
