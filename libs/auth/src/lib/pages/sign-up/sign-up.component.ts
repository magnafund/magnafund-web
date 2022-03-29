import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MessageService } from 'primeng/api';
import { AuthService } from '@crowdfunding/core';

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
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private uiLoader: NgxUiLoaderService,
    ) { }

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

    if(this.signupForm.invalid){
      this.messageService.add({severity:'error', summary:'Error', detail:'Fill in all fields correctly'})
      return ;
    }
    this.uiLoader.start()


    this.authService.signUp(this.signupForm.value).subscribe((res:any)=> {
      if(res.success === false){
        this.uiLoader.stop();
        this.messageService.add({severity:'error', summary:'Error', detail:`${res.messages.map((error: string) => error)}`})
      } else {
        this.uiLoader.stop();
        this.userEmail = this.signupForm.value.email
        this.signupForm.reset();
        this.displayResponsive = true;
        this.messageService.add({severity:'success', summary:'Success', detail:'Account successfully created. Enter OTP to verify your email'})

      }
    }, (error) => {
      this.uiLoader.stop();
      // this.messageService.add({severity:'error', summary:'Error', detail:`${error.messages.map((error: string) => error)}`})
      this.messageService.add({severity:'error', summary:'Error', detail:`${error.error.messages.map((err: string) => err)}`})
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
    this.uiLoader.start();

    this.authService.verifyAccount(verificationDetails).subscribe((res:any)=> {
      if(res.success == false){
        this.uiLoader.stop();
        this.messageService.add({severity:'error', summary:'Error', detail:`${res?.messages[0]}`})
      } else {
        this.uiLoader.stop();
        this.displayResponsive = false;
        this.messageService.add({severity:'success', summary:'Success', detail:`${res?.messages[0]}`})

      }
    }, (error: any) => {
      this.uiLoader.stop();
      this.messageService.add({severity:'error', summary:'Error', detail:`${error?.messages[0]}`})
      console.log("error iyi ",error)
    })

  }

}
