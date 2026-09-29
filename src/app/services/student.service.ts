import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, retry } from 'rxjs';

import { Student, VoucherCreate } from './../models/student';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  basePath = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getStudentSeasons(user_id: number): Observable<Student[]> {
    const url = `${this.basePath}/season/${user_id}`;
    return this.http.get<Student[]>(url).pipe(retry(2));
  }

  getCoursesCompleted(user_id: number): Observable<Student[]> {
    const url = `${this.basePath}/season/course/${user_id}`;
    return this.http.get<Student[]>(url).pipe(retry(2));
  }

  getStudentList(): Observable<Student[]> {
    const url = `${this.basePath}/student/list`;
    return this.http.get<Student[]>(url).pipe(retry(2));
  }

  getStudentCount(periodo_id: number): Observable<any> {
    const url = `${this.basePath}/student/count?periodo=${periodo_id}`;
    return this.http.get<any>(url).pipe(retry(2));
  }

  // Sin periodo_id devuelve los alumnos del periodo activo
  getStudentActivePeriodList(periodo_id?: number): Observable<Student[]> {
    const query = periodo_id != null ? `?periodo=${periodo_id}` : '';
    const url = `${this.basePath}/student/period${query}`;
    return this.http.get<Student[]>(url).pipe(retry(2));
  }

  getTeacherList(teacher_id: number): Observable<Student[]> {
    const url = `${this.basePath}/teacher/list/${teacher_id}`;
    return this.http.get<Student[]>(url).pipe(retry(2));
  }

  inscribirStudent(data: any): Observable<any> {
    const url = `${this.basePath}/student/create`;
    return this.http.post(url, data, this.httpOptions);
  }

  createDeclarativaStudent(cursoslist: any, member_id: number): Observable<any> {
    const url = `${this.basePath}/student/declarativa`;
    return this.http
      .post<any>(url, { cursos: cursoslist, member_id: member_id })
      .pipe(retry(2));
  }

  updateStudent(studentId: number, updatedData: any): Observable<any> {
    const url = `${this.basePath}/student/update/${studentId}`;
    return this.http.put(url, updatedData);
  }

  uploadVoucher(voucherData: VoucherCreate): Observable<any> {
    const url = `${this.basePath}/vouchers/create`;
    return this.http.post(url, voucherData);
  }

  deleteStudent(studentId: number): Observable<any> {
    const url = `${this.basePath}/student/delete/${studentId}`;
    return this.http.delete(url);
  }
}
