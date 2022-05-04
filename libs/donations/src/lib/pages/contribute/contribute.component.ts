import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { DonationsService } from '../../services/donations.service';

@Component({
  selector: 'crowdfunding-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})
export class ContributeComponent implements OnInit {
  contributionForm! : FormGroup;
  constructor(private formBuilder : FormBuilder, private activatedRoute : ActivatedRoute, private donationService : DonationsService, private messageService : MessageService,
    private location: Location,) { }

  ngOnInit(): void {
    this.contributionForm = this.formBuilder.group({
      name : [''],
      accountNumber : ['', Validators.required],
      amount : ['', Validators.required],
    })
  }

  pay(){
    // {
    //   "name": "string",
    //   "amount": 0,
    //   "paymentMethod": 1,
    //   "accountNumber": "string",
    //   "donationId": 0
    // }

    const request = {
      ...this.contributionForm.value,
      donationId:  this.activatedRoute.snapshot.params['id'],
      paymentMethod: 1
      
    }

    this.donationService.makePayment(request).subscribe(()=> {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Payment initiated successfuly check your phone for prompt to complete payment!'
      });
      
    }, (error : any) => {
      this.messageService.add({severity:'Failed', summary:'Payment initiation failed', detail:`${error.error.messages.map((err:any)=> err)}`})
    })

    

  }

  get formValues(){
    return this.contributionForm.controls
  }

}
