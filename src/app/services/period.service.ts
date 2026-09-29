import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, retry } from 'rxjs';

import { Period } from './../models/student';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PeriodService {
  basePath = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPeriodList(): Observable<Period[]> {
    const url = `${this.basePath}/periods/list`;
    return this.http.get<Period[]>(url).pipe(retry(2));
  }
}
