import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { TestsComponent } from './screens/tests/tests.component';
import { AffiliatesComponent } from './screens/affiliates/affiliates.component';
import { AppointmentsComponent } from './screens/appointments/appointments.component';
import { AppointmentCreateComponent } from './screens/appointment-create/appointment-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tests', component: TestsComponent },
  { path: 'affiliates', component: AffiliatesComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'appointments/create', component: AppointmentCreateComponent },
  { path: 'appointments/edit/:id', component: AppointmentCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
