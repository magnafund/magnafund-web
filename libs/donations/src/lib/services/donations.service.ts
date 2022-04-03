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

  getCategoryById(id: any): Observable<Category>{
    return this.http.get<Category>(`${ApplicationApis.Donations}/DonationCategory/${id}`)
  }


  getAllDonations(): Observable<Donation[]>{
    return this.http.get<Donation[]>(`${ApplicationApis.Donations}/Donations/get-all-donations`)
  }
  getTopDonations(): Observable<Donation[]>{
    return this.http.get<Donation[]>(`${ApplicationApis.Donations}/Donations/get-top-donations`)
  }

  getDonationsByUserId(userid: number) : Observable<Donation[]>{
    return this.http.get<Donation[]>(`${ApplicationApis.Donations}/Donations/get-by-userId/${userid}`)
  }

  getDonationsById(id: number) : Observable<any>{
    return this.http.get<any>(`${ApplicationApis.Donations}/Donations/get-by-id/${id}`)
  }
  getDonationsByCategory(category: any[] ) {
    return this.http.post(`${ApplicationApis.Donations}/Donations/get-by-category-Id`, category)
  }

  postDonation(donation : Donation){
    return this.http.post<any>(`${ApplicationApis.Donations}/Donations`, donation)
  }
  makePayment(donation : any){
    return this.http.post<any>(`https://cf-donations-api.herokuapp.com/api/Payment/process-payment`, donation)
  }
  updateDonation(donation : Donation){
    return this.http.put<any>(`${ApplicationApis.Donations}/Donations/update-donation`, donation)
  }
  updateImage(donation : FormData, donationId : string){
    return this.http.put<any>(`${ApplicationApis.Donations}/Donations/update-donation/image?donationId=${donationId}`, donation)
  }

  

  
}
