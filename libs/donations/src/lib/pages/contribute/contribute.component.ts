import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'crowdfunding-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})
export class ContributeComponent implements OnInit {
  contributionForm! : FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.contributionForm = this.formBuilder.group({
      name : ['Anonymous'],
      phoneNumber : ['', Validators.required],
      amount : ['', Validators.required],
    })
  }

  pay(){
    console.log("pay")
  }

}
