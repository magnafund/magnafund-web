import { Component, OnInit } from '@angular/core';
import { DonationsService } from '@crowdfunding/donations';

@Component({
  selector: 'crowdfunding-donations-list-dashboard',
  templateUrl: './donations-list-dashboard.component.html',
  styleUrls: ['./donations-list-dashboard.component.scss']
})
export class DonationsListDashboardComponent implements OnInit {
  donations : any[] = []
  constructor(private donationsService: DonationsService) { }

  ngOnInit(): void {
    this.getDonations()
  }

  getDonations(){
    this.donationsService.getAllDonations().subscribe((res:any) => {
      this.donations = res.data
    })
  }

}
