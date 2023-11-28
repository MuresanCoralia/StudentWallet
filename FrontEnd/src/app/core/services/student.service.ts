import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private apiUrl = 'http://localhost:8085/api/student';

  constructor(private http: HttpClient) { }

  // Create a new student
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}/add`, student).pipe(
      map((response: any) => {
        return Array.isArray(response['data']) ? response['data'][0] : response['data'];
      }),
      catchError((error: string) => {
        return throwError(() => error);
      }))
  }

  // Get all students
  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}`).pipe(
      map((response: any) => {
        return response['data'];
      }),
      catchError((error: string) => {
        return throwError(() => error);
      }));
  }

  // Get student by ID
  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`).pipe(
      map((response: any) => {
        return response['data'][0];
      }),
      catchError((error: string) => {
        return throwError(() => error);
      }));
  }

  // Update a student
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/update/${id}`, student).pipe(
      map((response: any) => {
        return response['data'];
      }),
      catchError((error: string) => {
        return throwError(() => error);
      }));
  }

  // Delete a student
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`).pipe(
      catchError((error: string) => {
        return throwError(() => error);
      }));
  }
}