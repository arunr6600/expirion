import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  slides = [
    { image: '../../assets/images/signup-banner.png' },
    { image: '../../assets/images/hero-banner.png' },
    { image: '../../assets/images/featuredbanner1.png' },
    { image: '../../assets/images/inspiration1.png' },
  ];
}
