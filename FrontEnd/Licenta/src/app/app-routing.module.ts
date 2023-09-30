import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './schedule/calendar/calendar.component';
import { ProfilePageComponent } from './home/profile-page/profile-page.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: 'profile', component: ProfilePageComponent },
  { path: 'schedule', component: CalendarComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
