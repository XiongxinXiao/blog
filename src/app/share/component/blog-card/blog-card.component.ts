import { Component, OnInit, Input } from '@angular/core';
import { blog } from '../../../home';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input() blog
  constructor() { }

  ngOnInit() {
  }

}
