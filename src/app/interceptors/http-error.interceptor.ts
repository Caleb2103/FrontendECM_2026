import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          console.error(`Network error: ${error.error.message}`);
        } else {
          console.error(
            `Backend returned code ${error.status} for ${request.method} ${request.url}, body was:`,
            error.error
          );
        }
        return throwError(
          () => new Error('Something happened with the request, please try again later')
        );
      })
    );
  }
}
