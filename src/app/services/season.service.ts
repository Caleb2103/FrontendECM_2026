import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, retry } from "rxjs";

import { Season } from './../models/student';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  basePath = `${environment.apiUrl}/season`;

  constructor(private http: HttpClient) {
  }

  getSeasonList(user_id: number): Observable<Season[]> {
    const url = `${this.basePath}/list/${user_id}`;
    return this.http.get<Season[]>(url).pipe(retry(2));
  }
}
