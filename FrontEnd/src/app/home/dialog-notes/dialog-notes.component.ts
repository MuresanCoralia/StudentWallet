import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OtherInfoCardComponent } from '../notes-card/other-info-card.component';

@Component({
  selector: 'app-dialog-notes',
  templateUrl: './dialog-notes.component.html',
  styleUrls: ['./dialog-notes.component.scss']
})
export class DialogNotesComponent {

  constructor(public dialogRef: MatDialogRef<OtherInfoCardComponent>) { }

  // save created form
  public saveNote(): void {
    this.dialogRef.close();
  }
}
