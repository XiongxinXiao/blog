import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContainerComponent } from './component';
import { ShareModule } from '../share';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
    declarations: [
        AdminContainerComponent
    ],
    imports: [ 
        CommonModule,
        ShareModule,
        AdminRoutingModule
    ],
    exports: [],
    providers: [],
})
export class AdminModule {}