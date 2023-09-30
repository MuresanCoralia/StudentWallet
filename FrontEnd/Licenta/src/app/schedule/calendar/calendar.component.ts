import { Component } from '@angular/core';

export interface PeriodicElement {
  subject: string;
  position: number;
  marks: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, subject: 'Mthematics', marks: 1.0079},
  { position: 2, subject: 'Phisics', marks: 4.0026},
  { position: 3, subject: 'Computer Science', marks: 6.941}
];

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  displayedColumns: string[] = ['position', 'subject', 'marks', 'actions'];
  dataSource = ELEMENT_DATA;
}
