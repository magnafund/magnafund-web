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
  otpForm!: FormGroup;
  displayResponsive = false;
  userEmail = ''
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

    this.otpForm = this.formBuilder.group({
      otp : ['', Validators.required]
    })
  }

  signUp(){

    this.userEmail = this.signupForm.value.email
    if(this.signupForm.invalid){
      this.messageService.add({severity:'error', summary:'Error', detail:'Fill in all fields correctly'})
    }

    this.authService.signUp(this.signupForm.value).subscribe((res:any)=> {
      if(res.success == false){
        this.messageService.add({severity:'error', summary:'Error', detail:`${res.messages.map((error: string) => error)}`})
      } else {
        this.displayResponsive = true;
        this.messageService.add({severity:'success', summary:'Success', detail:'Account successfully created. Enter OTP to verify your email'})

      }
    }, (error) => {
      this.messageService.add({severity:'error', summary:'Error', detail:`${error.messages.map((error: string) => error)}`})
    })
  }

  resendOTP(){
    this.messageService.add({severity:'error', summary:'Error', detail:'resend OTP failed'})

  }

  sendOTP(){
    const verificationDetails = {
        email: this.userEmail,
        confirmationCode: this.otpForm.value.otp
    }

    if(this.otpForm.invalid){
      this.messageService.add({severity:'error', summary:'Error', detail:'Enter OTP'})
    }

    this.authService.verifyAccount(verificationDetails).subscribe((res:any)=> {
      if(res.success == false){
        this.messageService.add({severity:'error', summary:'Error', detail:`${res?.messages[0]}`})
      } else {
        this.displayResponsive = false;
        this.messageService.add({severity:'success', summary:'Success', detail:`${res?.messages[0]}`})

      }
    }, (error: any) => {
      this.messageService.add({severity:'error', summary:'Error', detail:`${error?.messages[0]}`})
      console.log("error iyi ",error)
    })

  }

}
