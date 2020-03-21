import { Injectable, RootRenderer } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { resLogin } from '../interface';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) {}
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
    loginReq(username, password) {
       return this.http.post<resLogin>('/api/user/login', {
            username,
            password
        }, 
        this.httpOptions
        )
    }
}