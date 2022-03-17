import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'crowdfunding-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  verificationCodeForm!: FormGroup;
  resetSuccess = false;
  constructor(private formBuilder: FormBuilder, private messageService: MessageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.innitResetForm();
  }

  innitResetForm(){
    this.resetForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
    })
    this.verificationCodeForm = this.formBuilder.group({
      code : ['', Validators.required],
    })
  }

  resetPassword(){
    if (this.resetForm.invalid){
      this.messageService.add({severity:'error', summary:'Error', detail:'Fill in your email to continue'})
      return;
    }
    this.authService.resetPassword(this.resetForm.value.email).subscribe((res)=> {
      this.messageService.add({severity:'success', summary:'Success', detail:`${res.data}`})
      this.resetSuccess = true;
    }, (error) => {
      this.messageService.add({severity:'error', summary:'Error', detail:`${error.error.messages.map((err:string) => err)}`})

    })
  }

  verifyCode(){
    console.log(this.verificationCodeForm.value)
  }
}
