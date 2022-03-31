import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationApis } from '@env/environment';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Donation } from '../models/donation';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  constructor(private http : HttpClient) { }

  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${ApplicationApis.Donations}/DonationCategory`)
  }
  getAllDonations(): Observable<Donation[]>{
    return this.http.get<Donation[]>(`${ApplicationApis.Donations}/Donations/get-all-donations`)
  }

  getDonationsByUserId(userid: number) : Observable<Donation[]>{
    return this.http.get<Donation[]>(`${ApplicationApis.Donations}/Donations/get-by-userId/${userid}`)
  }

  getDonationsById(id: number) : Observable<Donation[]>{
    return this.http.get<Donation[]>(`${ApplicationApis.Donations}/Donations/get-by-id/${id}`)
  }

  postDonation(donation : Donation){
    return this.http.post<any>(`${ApplicationApis.Donations}/Donations`, donation)
  }

  

  
}
