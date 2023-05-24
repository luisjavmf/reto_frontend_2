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

  private affiliatesAppointments: AffiliateAppointments[] = [];

  async setAffiliateAppointments() {
    this.affiliatesAppointments =
      await this.fetchAllAffiliatesWithAppointments();
  }

  async getAffiliateAppointments() {
    if (this.affiliatesAppointments.length === 0) {
      let result = await this.fetchAllAffiliatesWithAppointments();
      this.affiliatesAppointments = result;
      return result;
    }

    return this.affiliatesAppointments;
  }

  /**
   * Fetch all affiliates with their appointments.
   *
   * @returns Promise<AffiliateAppointments[]>
   */
  private async fetchAllAffiliatesWithAppointments(): Promise<
    AffiliateAppointments[]
  > {
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

  private fetchAffiliates(): Observable<Affiliate[]> {
    return this.http.get<Affiliate[]>(`${this.apiUrl}`);
  }
}
