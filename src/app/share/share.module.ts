import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header';
import { VerticleGridComponent, BlogCardComponent } from './component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// angular material
import { MatToolbarModule}  from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginDialogComponent } from './component/login-dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [
        HeaderComponent,
        VerticleGridComponent,
        BlogCardComponent,
        LoginDialogComponent
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
        ReactiveFormsModule
    ],
    exports: [
        HeaderComponent,
        VerticleGridComponent,
        BlogCardComponent
    ],
    providers: [],
    entryComponents: [
        LoginDialogComponent
    ]
})
export class ShareModule {}