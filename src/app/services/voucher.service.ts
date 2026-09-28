import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VoucherService {
  basePath = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private vouchersCache: any[] | null = null;

  constructor(private http: HttpClient) { }

  getVoucherList(forceRefresh = false): Observable<any[]> {
    if (!forceRefresh && this.vouchersCache) {
      return of(this.vouchersCache);
    }
    const url = `${this.basePath}/vouchers/list`;
    return this.http.get<any[]>(url).pipe(
      tap(data => this.vouchersCache = data)
    );
  }

  getVoucherImage(voucherId: number): Observable<any> {
    const url = `${this.basePath}/vouchers/image/${voucherId}`;
    return this.http.get(url);
  }

  approveVoucher(voucherId: number): Observable<any> {
    const url = `${this.basePath}/vouchers/update/${voucherId}`;
    return this.http.patch(url, { vouc_status: 'Aprobado' }, this.httpOptions).pipe(
      tap(() => { this.vouchersCache = null; })
    );
  }
}
