import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class CalendarComponent {

  isTableExpanded = false;

  STUDENTS_DATA = [
    {
      "id": 1,
      "subject": "Mathematics",
      "year": 1,
      "semester": 1,
      "subjects": [ 10, 9, 8]
    },
    {
      "id": 2,
      "subject": "Electronics",
      "year": 1,
      "semester": 2,
      "subjects": [7, 5, 6]
    }
  ];

  dataStudentsList = new MatTableDataSource();
  displayedStudentsColumnsList: string[] = ['id', 'subject', 'year', 'semester', 'actions'];

  ngOnInit() {
    this.dataStudentsList.data = this.STUDENTS_DATA;
  }

}
