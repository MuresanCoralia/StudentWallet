import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  studentInfo!: Student;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudent();
  }

  private getStudent(): void {
    this.studentService.getStudentById(2).subscribe((res) => {
      this.studentInfo = res;
    });
  }
}
