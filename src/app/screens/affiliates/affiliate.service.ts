import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environtment.prod';
import { Affiliate } from '../../shared/interfaces/affiliate.interface';
import { AppointmentService } from '../appointments/appointment.service';
import { AffiliateAppointments } from 'src/app/shared/interfaces/affiliateAppointments.interface';
import { Appointment } from 'src/app/shared/interfaces/appointment.interface';

@Injectable({
  providedIn: 'root',
})
export class AffiliateService {
  constructor(
    private http: HttpClient,
    private appointmentService: AppointmentService
  ) {}

  readonly apiUrl: string = environment.URL + '/affiliates';

  affiliatesAppointments: AffiliateAppointments[] = [];

  fetchAffiliates(): Observable<Affiliate[]> {
    return this.http.get<Affiliate[]>(`${this.apiUrl}`);
  }

  /**
   * Fetch all affiliates with their appointments.
   *
   * @returns Promise<AffiliateAppointments[]>
   */
  async fetchAllAffiliatesWithAppointments(): Promise<AffiliateAppointments[]> {
    let affiliates$ = this.fetchAffiliates();
    let affiliates = await lastValueFrom(affiliates$);

    let result: AffiliateAppointments[] = await Promise.all(
      affiliates.map(async (affiliate: Affiliate) => {
        let appointments$ =
          this.appointmentService.fetchAppointmentByAffiliateId(affiliate.id);
        let appointments = await lastValueFrom(appointments$);

        return { ...affiliate, appointments };
      })
    );

    return result;
  }

  async getAffiliateAppointments() {
    return this.affiliatesAppointments.length === 0
      ? await this.fetchAllAffiliatesWithAppointments()
      : this.affiliatesAppointments;
  }
}
