import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog';
import {FormControl, Validators} from '@angular/forms';
import { Observable, Subject, merge } from 'rxjs';
import { LoginService } from '../../service';
import { map, tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private dialog: MatDialog, private service: LoginService) {}

  login$: Observable<boolean>;
  realname$: Observable<string>;
  nameMerge: Observable<string>;
  nameSubject = new Subject<string>();
  unsubscribe$ = new Subject<void>();
  ngOnInit() {
    this.realname$ = this.service.getName().pipe(
      map(res => {
        if (res.errno === 0) {
          return res.data.realname;
        } else {
          return 'Visitor';
        }
      })
    );
    /*this.realname$.subscribe(res => {
      this.realName = res;
    });*/
    this.nameMerge = merge(this.realname$, this.nameSubject);
    this.login$ = this.nameMerge.pipe(
      map(res => {
        console.log(res);
        if (res === 'Visitor') {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  //seachControl = new FormControl('', [Validators.maxLength(20)]);

  toHome() {
    this.router.navigate(['home']);
  }

  toLogin(){
    const dialogRef = this.dialog.open(LoginDialogComponent);
    dialogRef.afterClosed().pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      if (res != null) {
        this.nameSubject.next(res);
      }
    });
  }

  toLogout() {
    this.service.logoutReq().pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      if (res.errno === 0) {
        this.nameSubject.next('Visitor');
      } else {
        alert(res.message);
      }
    })
  }

  toAdmin() {
    this.router.navigate(['admin']);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.nameSubject.complete();
  }

}
