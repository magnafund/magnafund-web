import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DonationsService } from '@crowdfunding/donations';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from '@crowdfunding/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'crowdfunding-donations-add-dashboard',
  templateUrl: './donations-add-dashboard.component.html',
  styleUrls: ['./donations-add-dashboard.component.scss']
})
export class DonationsAddDashboardComponent implements OnInit {
  editmode = false;
  isSubmitted = false;
  donationsForm! : FormGroup;
  constructor(
    private formBuilder : FormBuilder, 
    private donationService: DonationsService, 
    private jwtHelperService : JwtHelperService, 
    private tokenService : TokenService,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.initialiseForm();
    this.checkEdit()
    
  }

  checkEdit(){
    (this.activatedRoute.snapshot.params['id']) ? this.editmode = true : this.editmode = false

    if(this.editmode){
      this.donationService.getDonationsById(this.activatedRoute.snapshot.params['id']).subscribe((donation)=> {
        console.log(donation)
      })
    }
  }

  initialiseForm(){
    this.donationsForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      amountGoal: ['', Validators.required],
      endDate: ['', Validators.required],
      userId: [0]
    })
  }

  createDonation(){
    const token : any = this.tokenService.getToken()
    const userId = parseInt(this.jwtHelperService.decodeToken(token).UserId)
    const donation = {userId, ...this.donationsForm.value}
    this.donationService.postDonation(donation).subscribe((res) => {
      console.log(res)
    })
  }

}
