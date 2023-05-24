import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
// import {lastValueFrom} from'rxjs
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AffiliateService } from '../affiliate.service';
import { Affiliate } from 'src/app/shared/interfaces/affiliate.interface';
import { Appointment } from 'src/app/shared/interfaces/appointment.interface';
import { AffiliateAppointments } from 'src/app/shared/interfaces/affiliateAppointments.interface';

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
  dataSource: AffiliateDto[] = [];
  columnsToDisplay = ['id', 'name', 'age', 'email'];

  constructor(private affiliateService: AffiliateService) {}

  async ngOnInit() {
    let data: AffiliateAppointments[] =
      await this.affiliateService.getAffiliateAppointments();

    this.dataSource = data.map((item) => {
      return { ...item, expanded: false };
    });
  }

  toggleRow(element: { expanded: boolean }) {
    // Uncommnet to open only single row at once
    this.dataSource.forEach((row) => {
      row.expanded = false;
    });
    element.expanded = !element.expanded;
  }

  manageAllRows(flag: boolean) {
    this.dataSource.forEach((row) => {
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

export interface AffiliateDto {
  id: number;
  name: string;
  age: number;
  email: string;
  expanded: boolean;
  appointments: Appointment[];
}
