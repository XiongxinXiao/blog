import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { blog, response } from '../interface';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(private http: HttpClient){}
    getBlogs() {
        return this.http.get<response>(`/api/blog/list`);
    }
}