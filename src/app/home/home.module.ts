import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './component/home-container';
import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../share';
import { MatListModule } from '@angular/material/list';


@NgModule({
    declarations: [
        HomeContainerComponent
    ],
    imports: [ 
        CommonModule,
        HomeRoutingModule,
        ShareModule,
        MatListModule
    ],
    exports: [],
    providers: [],
})
export class HomeModule {}