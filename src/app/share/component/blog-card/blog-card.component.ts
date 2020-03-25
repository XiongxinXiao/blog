import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { blog } from '../../../home';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogCardComponent implements OnInit {
  @Input() blog;
  @Output() blogEditReq = new EventEmitter<blog>();
  @Output() blogDelReq = new EventEmitter<blog>();
  isAdmin: Observable<boolean>;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isAdmin = this.route.url.pipe(
      map(url => {
        return url[0].path === 'admin'
      })
    )
  }

  editHandle() {
    this.blogEditReq.emit(this.blog); 
  }

  delHandle() {
    this.blogDelReq.emit(this.blog);
  }
}
