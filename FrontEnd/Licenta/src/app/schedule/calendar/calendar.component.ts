import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Mthematics', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Phisics', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Computer Science', weight: 6.941, symbol: 'Li' }
];

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
