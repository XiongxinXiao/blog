import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { resList, resEdit, blog } from '../../share/interface';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    constructor(private http: HttpClient){}

    getBlogs() {
        return this.http.get<resList>(`/api/blog/list?isadmin=1`);
    }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    newBlog(blog: blog) {
        return this.http.post<resEdit>(`/api/blog/new`, blog, this.httpOptions);
    }

    updateBlog(blog: blog) {
        return this.http.post<resEdit>(`/api/blog/update?id=${blog.id}`, blog, this.httpOptions);
    }

    delBlog(blog: blog) {
        return this.http.post<resEdit>(`/api/blog/del?id=${blog.id}`, blog, this.httpOptions);
    }
}