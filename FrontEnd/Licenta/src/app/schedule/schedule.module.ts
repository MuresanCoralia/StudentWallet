import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule
  ]
})
export class ScheduleModule { }
