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
  userId! : number
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
    const token : any = this.tokenService.getToken()
    this.userId = parseInt(this.jwtHelperService.decodeToken(token).UserId)
    this.getDonations()
  }

  updateDonation(donationId: string) {
    this.router.navigateByUrl(`donations/form/${donationId}`);
  }
  updateImage(donationId: string) {
    this.router.navigateByUrl(`donations/update-image/${donationId}`);
  }

  getDonations(){
    
    this.donationsService.getDonationsByUserId(this.userId).subscribe((res:any) => {
      this.donations = res.data
      console.log(res.data)
    })
  }

}
