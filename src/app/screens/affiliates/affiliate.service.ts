import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environtment.prod';

@Injectable({
  providedIn: 'root',
})
export class AffiliateService {
  constructor(private http: HttpClient) {}

  readonly apiUrl: string = environment.URL;

  fetchAffiliates() {
    return this.http.get(`${this.apiUrl}/affiliates`);
  }
}
