import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from '@crowdfunding/core';
import { DonationsService } from '@crowdfunding/donations';

@Component({
  selector: 'crowdfunding-donations-list-dashboard',
  templateUrl: './donations-list-dashboard.component.html',
  styleUrls: ['./donations-list-dashboard.component.scss']
})
export class DonationsListDashboardComponent implements OnInit {
  donations : any[] = []
  ORDER_STATUS = [
    {
      label: 'Active',
      color: 'success'
    },
    {
      label: 'Closed',
      color: 'warning'
    },
    {
      label: 'Blocked',
      color: 'danger'
    }
  ];
  
  constructor(
    private donationsService: DonationsService,  
    private jwtHelperService : JwtHelperService, 
    private tokenService : TokenService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.getDonations()
  }

  updateDonation(donationId: string) {
    this.router.navigateByUrl(`donations/form/${donationId}`);
  }

  getDonations(){
    const token : any = this.tokenService.getToken()
    const userId = parseInt(this.jwtHelperService.decodeToken(token).UserId)
    this.donationsService.getDonationsByUserId(userId).subscribe((res:any) => {
      this.donations = res.data
    })
  }

}
