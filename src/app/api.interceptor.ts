import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === 'POST') {
      let requestData: any = request.body;
      requestData.createdDate = new Date();
      const req = request.clone({ body: requestData, headers: new HttpHeaders().set('New-Access-Token', 'fdsdsgdfgfdg') });
      return next.handle(req);
    }
    return next.handle(request);
  }
}
