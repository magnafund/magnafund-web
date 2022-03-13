import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'crowdfunding-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  logIn(){
    console.log(this.loginForm.value)
  }

  private initializeForm(){
    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

}
