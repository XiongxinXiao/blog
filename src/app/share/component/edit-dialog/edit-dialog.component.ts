import { Component, OnInit, Inject, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { blog } from '../../interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDialogComponent implements OnInit {
  dataHandle = new EventEmitter;
  constructor(private dialogRef: MatDialogRef<EditDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public blog: blog) {}

  newBlog = Object.assign({},this.blog);
  
  blogForm = new FormGroup({
    title: new FormControl(this.newBlog.title, [
      Validators.required,
      Validators.maxLength(50)
    ]),
    content: new FormControl(this.newBlog.content, [
      Validators.required,
      Validators.maxLength(500)
    ]),
    img: new FormControl(this.newBlog.img),
  });
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    Object.assign(this.newBlog, this.blogForm.value, { createtime: Date.now() });
    this.dataHandle.emit(this.newBlog);
    //console.log('this is newBlog', this.newBlog);
  }

  ngOnInit() {
  }

  get title() { return this.blogForm.get('title'); }
  get content() { return this.blogForm.get('content'); }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
