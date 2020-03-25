import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AlertComponent>, 
    @Inject(MAT_DIALOG_DATA) public msg: string) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
