import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { resList, resEdit, blog } from '../interface';

@Injectable({
    providedIn: 'root'
})
export class EditService {
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
    constructor(private http: HttpClient){}

    updateBlog(id: number, blog: blog) {
        return this.http.post<resEdit>(`/api/blog/update?${id}`, blog, this.httpOptions);
    }
}