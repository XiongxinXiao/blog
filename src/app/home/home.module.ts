import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './component/home-container';
import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../share';

@NgModule({
    declarations: [
        HomeContainerComponent
    ],
    imports: [ 
        CommonModule,
        HomeRoutingModule,
        ShareModule
    ],
    exports: [],
    providers: [],
})
export class HomeModule {}