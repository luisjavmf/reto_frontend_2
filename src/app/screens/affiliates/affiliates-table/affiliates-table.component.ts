import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AffiliateService } from '../affiliate.service';

@Component({
  selector: 'app-affiliates-table',
  templateUrl: './affiliates-table.component.html',
  styleUrls: ['./affiliates-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class AffiliatesTableComponent implements OnInit {
  constructor(private affiliateService: AffiliateService) {}

  ngOnInit() {
    this.affiliateService.fetchAffiliates().subscribe(
      (data) => {
        // this.dataSource = data.map
      },
      (error) => {}
    );
  }

  title = 'angular-mat-table-example';

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id', 'name', 'age', 'email'];

  toggleRow(element: { expanded: boolean }) {
    // Uncommnet to open only single row at once
    ELEMENT_DATA.forEach((row) => {
      row.expanded = false;
    });
    element.expanded = !element.expanded;
  }

  manageAllRows(flag: boolean) {
    ELEMENT_DATA.forEach((row) => {
      row.expanded = flag;
    });
  }

  translateColumnName(name: string): string {
    switch (name) {
      case 'id':
        return 'Id afiliado';
      case 'name':
        return 'Nombre';
      case 'age':
        return 'Edad';
      case 'email':
        return 'Correo';
      default:
        return 'Unknown';
    }
  }
}

export interface Appointment {
  id: number;
  date: string;
  hour: string;
  testId: number;
  testName: string;
  affiliateId: number;
}

export interface Affiliate {
  id: number;
  name: string;
  age: number;
  email: string;
  expanded: boolean;
  appointments: Appointment[];
}

const ELEMENT_DATA: Affiliate[] = [
  {
    id: 1,
    name: 'Affiliate_1',
    age: 1,
    email: 'mail1@mail.com',
    expanded: false,
    appointments: [
      {
        id: 2,
        date: '1/1/2023',
        hour: '12:00',
        testId: 1,
        affiliateId: 1,
        testName: 'aaa',
      },
      {
        id: 3,
        date: '2/1/2023',
        hour: '13:00',
        testId: 3,
        affiliateId: 1,
        testName: 'aaa',
      },
      {
        id: 4,
        date: '3/1/2023',
        hour: '14:00',
        testId: 23,
        affiliateId: 1,
        testName: 'aaa',
      },
      {
        id: 5,
        date: '4/1/2023',
        hour: '15:00',
        testId: 2,
        affiliateId: 1,
        testName: 'aaa',
      },
    ],
  },
  {
    id: 2,
    name: 'Affiliate_2',
    age: 1,
    email: 'mail2@mail.com',
    expanded: false,
    appointments: [
      {
        id: 6,
        date: '4/2/2023',
        hour: '16:00',
        testId: 2,
        affiliateId: 2,
        testName: 'aaa',
      },
      {
        id: 7,
        date: '5/2/2023',
        hour: '17:00',
        testId: 1,
        affiliateId: 2,
        testName: 'aaa',
      },
      {
        id: 8,
        date: '6/2/2023',
        hour: '18:00',
        testId: 3,
        affiliateId: 2,
        testName: 'aaa',
      },
    ],
  },
  {
    id: 3,
    name: 'Affiliate_3',
    age: 1,
    email: 'mail3@mail.com',
    expanded: false,
    appointments: [
      {
        id: 9,
        date: '6/3/2023',
        hour: '18:00',
        testId: 3,
        affiliateId: 3,
        testName: 'aaa',
      },
    ],
  },
  {
    id: 4,
    name: 'Affiliate_4',
    age: 1,
    email: 'mail4@mail.com',
    expanded: false,
    appointments: [],
  },
  {
    id: 5,
    name: 'Affiliate_5',
    age: 1,
    email: 'mail5@mail.com',
    expanded: false,
    appointments: [],
  },
  {
    id: 6,
    name: 'Affiliate_6',
    age: 1,
    email: 'mail6@mail.com',
    expanded: false,
    appointments: [],
  },
  {
    id: 7,
    name: 'Affiliate_7',
    age: 1,
    email: 'mail7@mail.com',
    expanded: false,
    appointments: [],
  },
  {
    id: 8,
    name: 'Affiliate_8',
    age: 1,
    email: 'mail8@mail.com',
    expanded: false,
    appointments: [],
  },
  {
    id: 9,
    name: 'Affiliate_9',
    age: 1,
    email: 'mail9@mail.com',
    expanded: false,
    appointments: [],
  },
  {
    id: 10,
    name: 'Affiliate_10',
    age: 1,
    email: 'mail10@mail.com',
    expanded: false,
    appointments: [],
  },
];
