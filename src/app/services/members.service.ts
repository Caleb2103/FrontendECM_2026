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

  /**
   * Actualiza los datos personales de un miembro.
   * NOTA: este endpoint sigue la misma convención REST que
   * StudentService.updateStudent (`/student/update/{id}`), pero no hay
   * hoy un endpoint de "actualizar miembro" ya en uso en el resto del
   * código — falta confirmar con backend que `PUT /members/update/{id}`
   * exista con esa forma antes de dar el flujo de Perfil por probado.
   */
  updateMember(memberId: number, personalData: any): Observable<any> {
    return this.http.put<any>(`${this.basePath}/update/${memberId}`, personalData);
  }
}
