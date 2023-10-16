import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  studentInfo!: Student; 

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudent();
  }

  private getStudent(): void {
    this.studentService.getData(1).subscribe((res) => {
      this.studentInfo = res[0];
    });
  }
}
