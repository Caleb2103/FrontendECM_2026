import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, retry } from 'rxjs';

import { Course } from './../models/student';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  basePath = `${environment.apiUrl}/courses`;

  constructor(private http: HttpClient) {}

  getCoursesList(): Observable<Course[]> {
    const url = `${this.basePath}/list`;
    return this.http.get<Course[]>(url).pipe(retry(2));
  }
}
