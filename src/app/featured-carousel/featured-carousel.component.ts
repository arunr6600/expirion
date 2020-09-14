import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-carousel',
  templateUrl: './featured-carousel.component.html',
  styleUrls: ['./featured-carousel.component.scss'],
})
export class FeaturedCarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}



   slides = [
    { image: '../../assets/images/signup-banner.png' },
    { image: '../../assets/images/hero-banner.png' },
    { image: '../../assets/images/featuredbanner1.png' },
    { image: '../../assets/images/inspiration1.png' },
  ];
}
