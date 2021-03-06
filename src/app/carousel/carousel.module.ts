import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from './carousel.component';
import { CarouselService } from './carousel.service';

import { TransformProvider } from '../shared/transform.provider';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        NgbModule.forRoot()
    ],
    declarations: [
        CarouselComponent
    ],
    providers: [
        CarouselService,
        TransformProvider
    ],
    exports: [CarouselComponent]
})
export class CarouselModule { }