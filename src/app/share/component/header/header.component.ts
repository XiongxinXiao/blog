import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
  }
  toHome() {
    this.router.navigate(['home']);
  }

  toLogin(){
    this.dialog.open(LoginDialogComponent);
  }

  toAdmin() {
    this.router.navigate(['admin']);
  }

}
