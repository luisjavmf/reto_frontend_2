import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environtment.prod';
import { Affiliate } from '../../shared/interfaces/affiliate.interface';

@Injectable({
  providedIn: 'root',
})
export class AffiliateService {
  constructor(private http: HttpClient) {}

  readonly apiUrl: string = environment.URL;

  fetchAffiliates(): Observable<Affiliate[]> {
    return this.http.get<Affiliate[]>(`${this.apiUrl}/affiliates`);
  }
}
