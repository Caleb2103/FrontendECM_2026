import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, retry } from 'rxjs';
import { Member } from '../models/student';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  basePath = `${environment.apiUrl}/members`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getMembersByName(name: string): Observable<Member[]> {
    const trimmedName = name.trim();
    const url = trimmedName === ''
      ? `${this.basePath}/list`
      : `${this.basePath}/list?name=${trimmedName}`;

    return this.http.get<Member[]>(url).pipe(retry(2));
  }

  registerMember(personalData: any): Observable<any> {
    return this.http
      .post<any>(`${this.basePath}/create`, personalData)
      .pipe(retry(2));
  }

  getMember(memberId: number): Observable<Member> {
    return this.http.get<Member>(`${this.basePath}/detail/${memberId}`).pipe(retry(2));
  }

  /** Actualiza los datos personales (nombre, apellido, celular, nacimiento, zona). */
  updateMember(memberId: number, personalData: any): Observable<Member> {
    return this.http.put<Member>(`${this.basePath}/update/${memberId}`, personalData);
  }
}
