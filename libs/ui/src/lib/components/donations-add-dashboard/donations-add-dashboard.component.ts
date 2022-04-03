import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category, Donation, DonationsService } from '@crowdfunding/donations';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from '@crowdfunding/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'crowdfunding-donations-add-dashboard',
  templateUrl: './donations-add-dashboard.component.html',
  styleUrls: ['./donations-add-dashboard.component.scss']
})
export class DonationsAddDashboardComponent implements OnInit {
  editmode = false;
  isSubmitted = false;
  form! : FormGroup;
  userId!: any;
  categories!:Category[];
  currentDonation!: Donation;
  constructor(
    private formBuilder : FormBuilder, 
    private donationService: DonationsService, 
    private jwtHelperService : JwtHelperService, 
    private tokenService : TokenService,
    private activatedRoute : ActivatedRoute,
    private messageService : MessageService,
    private location: Location,
    ) { }
    
    ngOnInit(): void {      
      const token : any = this.tokenService.getToken()
      this.userId = parseInt(this.jwtHelperService.decodeToken(token).UserId)
      
      this.initialiseForm();
    this.checkEdit()
    this.getCategories()
  }
  
  checkEdit(){
    (this.activatedRoute.snapshot.params['id']) ? this.editmode = true : this.editmode = false
    
    if(this.editmode){
      this.donationService.getDonationsById(this.activatedRoute.snapshot.params['id']).subscribe((res: any)=> {
        this.currentDonation = res.data        
        console.log(this.currentDonation)
        this.donationsForm['title'].setValue(this.currentDonation.title)
        this.donationsForm['amountGoal'].setValue(this.currentDonation.amountGoal)
        this.donationsForm['endDate'].setValue(this.currentDonation.endDate)
        this.donationsForm['description'].setValue(this.currentDonation.description)
        this.donationsForm['categoryId'].setValue(this.currentDonation?.categoryId)
      })
      
    }
  }

  initialiseForm(){
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      amountGoal: ['', Validators.required],
      endDate: ['', Validators.required],
      categoryId: ['', Validators.required],
      shortDescription: ['', Validators.required],
      userId: [0]
    })
  }

  createDonation(){
    const donation = {userId : this.userId, ...this.form.value}
    this.donationService.postDonation(donation).subscribe((res) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Fundraising successfuly created!'
      });
      timer(2000)
        .toPromise()
        .then(() => {
          this.location.back();
        });
    }, (error: any) => {
      this.messageService.add({severity:'Failed', summary:'Fundraising was not created', detail:`${error.error.messages.map((err:any)=> err)}`})

    })
  }

  getCategories(){
    this.donationService.getAllCategories().subscribe((res : any) => {
      this.categories = res.data;
    })
  }

  get donationsForm() {
    return this.form.controls;
  }

  editDonation(){
    const donation = {...this.form.value}
    donation.userId = this.userId;
    donation.id = this.activatedRoute.snapshot.params['id'];
    console.log(donation)
    console.log(this.userId)
    this.donationService.updateDonation(donation).subscribe((res:any) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Fundraising successfuly updated!'
      });
      timer(2000)
        .toPromise()
        .then(() => {
          this.location.back();
        });
    }, (error: any) => {
   
        this.messageService.add({severity:'Failed', summary:'Fundraising was not updated', detail:`${error.error.messages.map((err:any)=> err)}`})
    })
  }

  onSubmit(){
    if(this.editmode)
      this.editDonation()
    this.createDonation()
  }

}
