import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { OtherInfoCardComponent } from './notes-card/other-info-card.component';
import { CoreModule } from '../core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { DialogNotesComponent } from './dialog-notes/dialog-notes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileCardComponent,
    ProfilePageComponent,
    InfoCardComponent,
    OtherInfoCardComponent,
    DialogNotesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    CoreModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DialogNotesComponent]
})
export class HomeModule { }
