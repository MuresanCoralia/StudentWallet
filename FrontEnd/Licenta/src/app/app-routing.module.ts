import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCardComponent } from './home/profile-card/profile-card.component';
import { CalendarComponent } from './schedule/calendar/calendar.component';

const routes: Routes = [
  { path: 'profile', component: ProfileCardComponent },
  { path: 'schedule', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
