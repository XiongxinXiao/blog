import { Injectable, RootRenderer } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { resLogin, realname } from '../interface';

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
    getName() {
      return this.http.get<resLogin>('/api/user/get-name')
    }

    logoutReq() {
      return this.http.get<resLogin>('api/user/logout')
    }
}