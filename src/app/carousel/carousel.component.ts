import { Component, OnInit, Inject, Input } from '@angular/core';
import * as $ from 'jquery';

import { CarouselService } from './carousel.service';

@Component({
    selector: "carousel",
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    @Input() container: string;

    private start = false;
    urls: string[] = [];
    constructor(private carouselService: CarouselService) { }

    ngOnInit() {
        if (this.container !== undefined) {
            this.carouselService.get(this.container).subscribe(
                (urls: string[]) => this.startCarousel(urls)
            );
        }
    }

    private startCarousel(urls: string[]) {
        this.urls = urls;
        //$('.carousel').carousel('cycle');
    }

    isActive(url: string) {
        return url === this.urls[0];
    }
}