import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { blog, resList } from '../../../share/interface';
import { HomeService } from '../../service';
import { Observable, merge, Subject, Subscription } from 'rxjs';
import { filter, map, switchMap, tap, takeUntil } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AlertComponent } from '../../../share/component';


@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit, OnDestroy {
  constructor(private service: HomeService, private dialog: MatDialog) { }
  response: Observable<resList>;
  searchRes = new Observable<resList>();
  unsubscribe = new Subject<void>();
  subject = new Subject<resList>();
  blogs: Observable<blog[]>;
  searchToggle = false;
  ngOnInit() {
    this.response = this.service.getBlogs();
    const mergeRes = merge(this.response, this.subject);
    //mergeRes.subscribe((result) => console.log('this is merge', result));
    
    this.blogs = mergeRes.pipe(
      map(res => {
        if (res.errno === 0) {
          return res.data;
        } else {
          this.dialog.open(AlertComponent,{
            width: '25rem',
            data: res.message
          })
        }
      })
    );
  }
  
  searchControl = new FormControl('', [Validators.maxLength(20)]);

  searchHandle() {
    this.searchRes = this.service.getSearchBlogs(this.searchControl.value);
    this.searchRes.pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      //console.log('this is search', res)
      if (res.data.length === 0) {
        //alert('No result match your keyword');
        this.dialog.open(AlertComponent,{
          width: '25rem',
          data: 'No result match your keyword'
        })
      } else {
        this.subject.next(res);
      }
    });
  }

  getAllHandle () {
    const getAll = this.service.getBlogs();
    getAll.pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      this.subject.next(res);
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.subject.complete();
  }

  searchToggleHandle() {
    this.searchToggle = !this.searchToggle;
  }
}
