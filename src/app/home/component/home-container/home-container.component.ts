import { Component, OnInit } from '@angular/core';
import { blog, resList } from '../../../share/interface';
import { HomeService } from '../../service';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  constructor(private service: HomeService) { }
  /*blogs: Array<blog> = [
    {
      id: 0,
      author: 'Dog Breed',
      title: 'Shiba Inu',
      content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      createtime: 1583630692306
    },
    {
      id: 1,
      author: 'Dog Breed',
      title: 'Poodle',
      content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      img: 'https://images-na.ssl-images-amazon.com/images/I/81eZBTy6z%2BL._AC_SX679_.jpg',
      createtime: 1583630692306
    },
    {
      id: 2,
      author: 'Dog Breed',
      title: 'Goden',
      content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      createtime: 1583630692306
    }
  ]*/
  response: Observable<resList>;
  blogs: Observable<blog[]>;
  ngOnInit() {
    this.response = this.service.getBlogs();
    this.blogs = this.response.pipe(
      map(res => res.data)
    );
  }

}
