import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/shared/interfaces/appointment.interface';
import { environment } from 'src/enviroments/environtment.prod';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}

  readonly apiUrl: string = environment.URL;

  fetchAppointmentByAffiliateId(id: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(
      `${this.apiUrl}/appointments?affiliate=${id}`
    );
  }
}
