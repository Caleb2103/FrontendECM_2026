import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.getInitialLoggedInState());

  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  basePath = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  private getInitialLoggedInState(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  login(dni: string): Observable<any> {
    const url = `${this.basePath}/login/${dni}`;
    return this.http.get(url).pipe(
      tap((response: any) => {
        if (response) {
          localStorage.setItem('isLoggedIn', 'true');
          this.isLoggedInSubject.next(true);
        }
      })
    );
  }

  setLoggedIn(value: boolean): void {
    this.isLoggedInSubject.next(value);
    localStorage.setItem('isLoggedIn', value.toString());
  }
}
