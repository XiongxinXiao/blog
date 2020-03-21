import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { resList, blog } from '../../../share/interface';
import { map } from 'rxjs/operators';
import { AdminService } from '../../service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.css']
})
export class AdminContainerComponent implements OnInit {

  constructor(private service: AdminService, private router: Router) {}

  response: Observable<resList>;
  blogs: Observable<blog[]>;
  ngOnInit() {
    this.response = this.service.getBlogs();
    this.blogs = this.response.pipe(
      map(res => res.data)
    );
    this.response.subscribe(res => {
      if (res.errno !== 0) {
        alert(res.message);
        this.router.navigate(['home']);
      }
    })
  }

}
