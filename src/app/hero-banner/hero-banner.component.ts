
/**
 * @author Arun R
 * Description - This will be used to manage the function related to Header Portion
 */

import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MenuSliderService } from '../common/menu-slider.service';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit {

  constructor(public menuService: MenuSliderService) { }
  style = {
    backgroundColor: "transparent",
    transition: "0.3s ease-in"
  }
  ngOnInit(): void {
  }
  // This function is used to check the  and toggle the side menu //

  status: boolean = false;
  burgerIcon() {
    this.menuService.toggleMenu();
  }
  
  // This function is used to  check the scroll top of the window and apply background color to the header //

  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    if (window.scrollY > 20) {
      this.style.backgroundColor = "#182c37cc";
    }
    else {
      this.style.backgroundColor = "transparent";
    }
  }
}
