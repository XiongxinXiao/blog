import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header';
import { MatToolbarModule}  from '@angular/material/toolbar';
import { VerticleGridComponent, BlogCardComponent } from './component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        HeaderComponent,
        VerticleGridComponent,
        BlogCardComponent
    ],
    imports: [ 
        CommonModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [
        HeaderComponent,
        VerticleGridComponent,
        BlogCardComponent
    ],
    providers: [],
})
export class ShareModule {}