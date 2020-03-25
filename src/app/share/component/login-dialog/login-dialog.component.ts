import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginService } from '../../service';
import { Observable } from 'rxjs';
import { resLogin } from '../../interface';
import {FormControl, Validators} from '@angular/forms';
import { AlertComponent } from '../alert';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginDialogComponent implements OnInit {
  response: Observable<resLogin>;
  hide = true;
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20)
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20)
  ]);
  
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private service: LoginService,
    private dialog: MatDialog
    ) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
 
  HandleLogin() {
    
    this.response = this.service.loginReq(this.nameFormControl.value, this.passFormControl.value);
    this.response.subscribe(
      res => {
        if (res.errno === 0) {
          //alert('Login successfully');
          this.dialogRef.close(res.data.realname);
          this.dialog.open(AlertComponent, {
            width: '25rem',
            data: 'Login successfully'
          });
        }else {
          //alert(res.message);
          this.dialog.open(AlertComponent, {
            width: '25rem',
            data: res.message
          });
        }
      });
  }
}
