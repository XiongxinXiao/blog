import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    VerticleGridComponent, 
    BlogCardComponent, 
    LoginDialogComponent,
    HeaderComponent,
    EditDialogComponent } from './component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// angular material
import { MatToolbarModule}  from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    declarations: [
        HeaderComponent,
        VerticleGridComponent,
        BlogCardComponent,
        LoginDialogComponent,
        EditDialogComponent
    ],
    imports: [ 
        CommonModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatListModule,
        ReactiveFormsModule,
        MatIconModule,
        MatMenuModule
    ],
    exports: [
        HeaderComponent,
        VerticleGridComponent,
        BlogCardComponent,
        CommonModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatListModule,
        ReactiveFormsModule,
        MatIconModule,
        MatMenuModule
    ],
    providers: [],
    entryComponents: [
        LoginDialogComponent,
        EditDialogComponent
    ]
})
export class ShareModule {}