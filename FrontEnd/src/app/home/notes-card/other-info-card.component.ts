import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';
import { StudentService } from 'src/app/core/services/student.service';
import { DialogNotesComponent } from '../dialog-notes/dialog-notes.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-other-info-card',
  templateUrl: './other-info-card.component.html',
  styleUrls: ['./other-info-card.component.scss']
})
export class OtherInfoCardComponent implements OnInit {

  studentInfo!: Student;

  constructor(private studentService: StudentService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getStudent();
  }

  private getStudent(): void {
    this.studentService.getData(2).subscribe((res) => {
      this.studentInfo = res[0];
    });
  }

  // open dialog to save a new category
  public openNotes(): void {
    const dialogRef = this.dialog.open(DialogNotesComponent, {
        width: '40%',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '120ms'
    });
    dialogRef.afterClosed().subscribe(() => {
        this.getStudent();
    });
}
}
