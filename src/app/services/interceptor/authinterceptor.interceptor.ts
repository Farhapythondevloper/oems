import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../loginservice/login.service';

@Injectable()
export class AuthinterceptorInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let cloneRequest = request ;
    let token = this.loginService.getToken();
    
   
    if(token!=null){
    cloneRequest=  cloneRequest.clone({
        setHeaders:{
          Authorization:`Bearer ${token}`
        }
      })
      // console.log(token)
    }
    return next.handle(cloneRequest);

  }
}
