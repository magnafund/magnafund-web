import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MessageService } from 'primeng/api';
import { AuthService, TokenService } from '@crowdfunding/core';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdfunding-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading_spinner = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
     private messageService: MessageService,
     private uiLoader: NgxUiLoaderService,
    private router: Router,
    private tokenService: TokenService
     ) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  logIn(){
    if(this.loginForm.invalid){
      this.messageService.add({severity:'error', summary:'Error', detail:'Fill in all fields correctly'})
      return ;
    }
    this.uiLoader.start();
    this.loading_spinner = true;

    this.authService.login(this.loginForm.value).subscribe((res:any)=> {
      if(res.success === false){
        this.uiLoader.stop();
        this.messageService.add({severity:'error', summary:'Error', detail:`${res.messages[0]}`})
      }
    this.messageService.add({severity:'success', summary:'Success', detail:'Login successful'})
    this.router.navigateByUrl('/');
    this.tokenService.setToken(res?.data?.token)
    }, (error: any) => {
      this.uiLoader.stop();
      this.messageService.add({severity:'error', summary:'Login failed', detail:`${error.error.messages.map((err:any)=> err)}`})
    })
  }

  private initializeForm(){
    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

}
