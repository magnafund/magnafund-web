import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'crowdfunding-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,  private authService: AuthService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  logIn(){
    if(this.loginForm.invalid){
      this.messageService.add({severity:'error', summary:'Error', detail:'Fill in all fields correctly'})
    }

    this.authService.signUp(this.loginForm.value).subscribe(()=> {
      this.messageService.add({severity:'success', summary:'Success', detail:'Login successful'})
    }, (error) => {
      this.messageService.add({severity:'error', summary:'Error', detail:'Login failed'})
    })
  }

  private initializeForm(){
    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

}
