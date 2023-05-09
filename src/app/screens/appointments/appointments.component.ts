import { Component } from '@angular/core';
import { Appointment } from '../affiliates/affiliates-table/affiliates-table.component';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent {
  displayedColumns: string[] = [
    'id',
    'date',
    'hour',
    'testId',
    'affiliateId',
    'options',
  ];

  dataSource: Appointment[] = ELEMENT_DATA;
}

const ELEMENT_DATA: Appointment[] = [
  {
    id: 1,
    date: '1/1/2023',
    hour: '12:00',
    testId: 1,
    affiliateId: 1,
    testName: 'any test',
  },
  {
    id: 2,
    date: '1/1/2023',
    hour: '12:00',
    testId: 1,
    affiliateId: 1,
    testName: 'any test',
  },
  {
    id: 3,
    date: '1/1/2023',
    hour: '12:00',
    testId: 1,
    affiliateId: 1,
    testName: 'any test',
  },
  {
    id: 4,
    date: '1/1/2023',
    hour: '12:00',
    testId: 1,
    affiliateId: 1,
    testName: 'any test',
  },
  {
    id: 5,
    date: '1/1/2023',
    hour: '12:00',
    testId: 1,
    affiliateId: 1,
    testName: 'any test',
  },
];
