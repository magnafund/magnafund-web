import { Component, OnInit } from '@angular/core';
import { TokenService } from '@crowdfunding/core';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdfunding-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(private tokenService : TokenService, private router : Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.tokenService.clearToken();
    this.router.navigateByUrl('/auth/login')
  }

}
