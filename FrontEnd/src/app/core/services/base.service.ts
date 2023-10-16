import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

  baseUrl = "http://localhost:8085/api/student";

  constructor(private http: HttpClient) { }

  getData(id?: number): Observable<T[]> {
    const byId = id ? `/${id}` : '';
    return this.http.get<T[]>(`${this.baseUrl}${byId}`).pipe(
      map((response: any) => {
        return response['data'];
      }),
      catchError((error: string) => {
        return throwError(() => error);
      })
    )
  }

  createData(data: T): Observable<T[]> {
    return this.http.post<T[]>(`${this.baseUrl}/add`, {data: [data]}).pipe(
      map((response: any) => {
        return Array.isArray(response['data']) ? response['data'][0] : response['data'];
      }),
      catchError((error: string) => {
        return throwError(() => error);
      })
    )
  }

  updateData(data: T): Observable<T[]> {
    return this.http.put<T[]>(`${this.baseUrl}/update/3`, {data: [data]}).pipe(
      map((response: any) => {
        return response['data'];
      }),
      catchError((error: string) => {
        return throwError(() => error);
      })
    )
  }

  deleteData(id: string): Observable<T[]> {
    return this.http.delete<T[]>(`${this.baseUrl}/delete/${id}`).pipe(
      catchError((error: string) => {
        return throwError(() => error);
      })
    )
  }
}
