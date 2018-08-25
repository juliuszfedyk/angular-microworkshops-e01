import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((error: any) => {
                    if(error instanceof HttpErrorResponse) {
                        if (error.status === 401) {
                            this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
                            return EMPTY;
                        } else {
                            return throwError(error);
                        }
                    }
                })
            );
    }
}