import { Appointment } from './appointment.interface';

export interface AffiliateAppointments {
  id: number;
  name: string;
  age: number;
  email: string;
  appointments: Appointment[];
}
