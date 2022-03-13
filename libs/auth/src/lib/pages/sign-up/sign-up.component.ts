import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'crowdfunding-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeSignupForm()
  }

  initializeSignupForm(){
    this.signupForm = this.formBuilder.group({
      beneficiaryName : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      phoneNumber : ['', Validators.required],
      password : ['', Validators.required],
    })
  }

  signUp(){
    console.log(this.signupForm.value)
  }

}
