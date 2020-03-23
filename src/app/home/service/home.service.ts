import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { blog, resList } from '../../share/interface';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(private http: HttpClient){}
    getBlogs() {
        return this.http.get<resList>(`/api/blog/list`);
    }
    getSearchBlogs(keyword: string) {
        return this.http.get<resList>(`/api/blog/list?keyword=${keyword}`);
    }
}