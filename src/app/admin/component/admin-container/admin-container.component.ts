import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { resList, blog } from '../../../share/interface';
import { map, takeUntil } from 'rxjs/operators';
import { AdminService } from '../../service';
import { NavigationEnd, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditDialogComponent } from 'src/app/share';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.css']
})
export class AdminContainerComponent implements OnInit, OnDestroy {

  constructor(private service: AdminService, private router: Router, public dialog: MatDialog) {}
  unsubscribe$ = new Subject<void>();
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

  editHandle(blog: blog) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '450px',
      data: blog
    });

    dialogRef.componentInstance.dataHandle.pipe(takeUntil(this.unsubscribe$)).subscribe((result) => {
      if (result != undefined) {
        //console.log(result);
        this.service.updateBlog(result).pipe(takeUntil(this.unsubscribe$)).subscribe(res =>{
          if (res.errno === 0) {
            alert('Updated blog has been uploaded')
            dialogRef.close();
            //window.location.reload();
            this.blogs = this.response.pipe(
              map(res => res.data)
            );
          } else {
            alert(`${res.message}, please try to upload again`)
          }
        });
      }
    });
  }
  

  newHandle() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '450px',
      data: {
        id: -1,
        author: '',
        title: '',
        content: '',
        img: '',
        createtime: 0
      }
    });

    dialogRef.componentInstance.dataHandle.pipe(takeUntil(this.unsubscribe$)).subscribe((result) => {
      if (result != undefined) {
        //console.log(result);
        this.service.newBlog(result).pipe(takeUntil(this.unsubscribe$)).subscribe(res =>{
          if (res.errno === 0) {
            alert('New blog has been uploaded')
            dialogRef.close();
            //window.location.reload();
            this.blogs = this.response.pipe(
              map(res => res.data)
            );
          } else {
            alert(`${res.message}, please try to upload again`)
          }
        });
      }
    });
  }

  delHandle(blog: blog) {
    this.service.delBlog(blog).pipe(takeUntil(this.unsubscribe$)).subscribe((res) => {
      if (res.errno === 0) {
        alert('The blog has been deleted');
        //window.location.reload();
        this.blogs = this.response.pipe(
          map(res => res.data)
        );
      }else {
        alert(res.message);
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
