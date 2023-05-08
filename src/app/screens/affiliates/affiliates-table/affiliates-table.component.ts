import { Component } from '@angular/core';

export interface Affiliate {
  id: number;
  name: string;
  age: number;
  email: string;
}

const ELEMENT_DATA: Affiliate[] = [
  { id: 1, name: 'Affiliate_1', age: 1, email: 'mail1@mail.com' },
  { id: 2, name: 'Affiliate_2', age: 2, email: 'mail2@mail.com' },
  { id: 3, name: 'Affiliate_3', age: 3, email: 'mail3@mail.com' },
  { id: 4, name: 'Affiliate_4', age: 4, email: 'mail4@mail.com' },
  { id: 5, name: 'Affiliate_5', age: 5, email: 'mail5@mail.com' },
  { id: 6, name: 'Affiliate_6', age: 6, email: 'mail6@mail.com' },
  { id: 7, name: 'Affiliate_7', age: 7, email: 'mail7@mail.com' },
  { id: 8, name: 'Affiliate_8', age: 8, email: 'mail8@mail.com' },
  { id: 9, name: 'Affiliate_9', age: 9, email: 'mail9@mail.com' },
  { id: 10, name: 'Affiliate_10', age: 10, email: 'mail10@mail.com' },
];

@Component({
  selector: 'app-affiliates-table',
  templateUrl: './affiliates-table.component.html',
  styleUrls: ['./affiliates-table.component.css'],
})
export class AffiliatesTableComponent {
  displayedColumns: string[] = ['id', 'name', 'age', 'email'];
  dataSource = ELEMENT_DATA;
}
