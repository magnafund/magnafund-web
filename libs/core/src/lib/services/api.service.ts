import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultService } from './default.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends DefaultService {
  constructor(httpClient: HttpClient) {
    super(httpClient, ``);
  }
}
