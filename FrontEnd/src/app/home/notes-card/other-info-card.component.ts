import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-other-info-card',
  templateUrl: './other-info-card.component.html',
  styleUrls: ['./other-info-card.component.scss']
})
export class OtherInfoCardComponent implements OnInit {

  studentInfo!: Student;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudent();
  }

  private getStudent(): void {
    this.studentService.getData(2).subscribe((res) => {
      this.studentInfo = res[0];
    });
  }
}
