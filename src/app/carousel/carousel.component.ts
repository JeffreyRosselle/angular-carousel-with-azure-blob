import { Component, OnInit, Inject, Input } from '@angular/core';

import { CarouselService } from './carousel.service';

@Component({
    selector: "carousel",
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    @Input() container: string;
    
    urls: string[] = [];
    constructor(private carouselService: CarouselService) { }

    ngOnInit() {
        if (this.container !== undefined) {
            this.carouselService.get(this.container).subscribe(
                (urls: string[]) => this.urls = urls
            );
        }
    }
}