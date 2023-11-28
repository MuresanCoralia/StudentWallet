import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OtherInfoCardComponent } from '../notes-card/other-info-card.component';
import { FormControl } from '@angular/forms';
import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/core/models/student.model';

@Component({
  selector: 'app-dialog-notes',
  templateUrl: './dialog-notes.component.html',
  styleUrls: ['./dialog-notes.component.scss']
})
export class DialogNotesComponent implements OnInit {

  Notes = new FormControl();
  studentInfo!: Student;
  editMode = false;

  constructor(public dialogRef: MatDialogRef<OtherInfoCardComponent>, private studentService: StudentService, @Inject(MAT_DIALOG_DATA) public data?: string) { }

  ngOnInit(): void {
    this.getStudent();
  }

  private getStudent(): void {
    this.studentService.getStudentById(2).subscribe((res) => {
      this.studentInfo = res;
      if (this.data) {
        this.editMode = true;
        this.Notes.setValue(this.studentInfo.others);
      }
    });
  }

  private updateStudent(): void {
    let student = {
      id: this.studentInfo.id,
      name: this.studentInfo.name,
      surname: this.studentInfo.surname,
      email: this.studentInfo.email,
      password: this.studentInfo.password,
      specialization: this.studentInfo.specialization,
      year: this.studentInfo.year,
      group: this.studentInfo.group,
      others: this.Notes.value,
      orarid: this.studentInfo.orarid
    }
    this.studentService.updateStudent(2, student).subscribe(() => {
    });
  }

  // save created form
  public saveNote(): void {
    this.updateStudent();
    this.dialogRef.close();
  }
}
