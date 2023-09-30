import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { OtherInfoCardComponent } from './other-info-card/other-info-card.component';

@NgModule({
  declarations: [
    ProfileCardComponent,
    ProfilePageComponent,
    InfoCardComponent,
    OtherInfoCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class HomeModule { }
