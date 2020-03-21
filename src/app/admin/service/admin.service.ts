import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resList } from '../../share/interface';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    constructor(private http: HttpClient){}
    getBlogs() {
        return this.http.get<resList>(`/api/blog/list?isadmin=1`);
    }
}