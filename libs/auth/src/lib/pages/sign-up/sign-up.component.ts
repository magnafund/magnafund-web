import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'crowdfunding-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private messageService: MessageService) { }

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
    if(this.signupForm.invalid){
      this.messageService.add({severity:'error', summary:'Error', detail:'Fill in all fields correctly'})
    }

    this.authService.signUp(this.signupForm.value).subscribe(()=> {
      this.messageService.add({severity:'success', summary:'Success', detail:'Account successfully created'})
    }, (error) => {
      this.messageService.add({severity:'error', summary:'Error', detail:'Account creation failed'})
    })
  }

}
