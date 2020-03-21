import { Component, OnInit, Input } from '@angular/core';
import { blog } from '../../../home';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input() blog;
  isAdmin: Observable<boolean>;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isAdmin = this.route.url.pipe(
      map(url => {
        return url[0].path === 'admin'
      })
    )
  }

}
