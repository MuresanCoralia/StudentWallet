import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})

export class StudentService extends BaseService<Student> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

}
