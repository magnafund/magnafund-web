import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationApis } from '@env/environment';
import { Observable } from 'rxjs';
import { Donation } from '../models/donation';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  constructor(private http : HttpClient) { }

  getAllDonations(): Observable<Donation[]>{
    return this.http.get<Donation[]>(`${ApplicationApis.Donations}/Donations/get-all-donations`)
  }
}
