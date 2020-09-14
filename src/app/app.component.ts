import { Component, OnInit } from '@angular/core';
import { MenuSliderService } from './common/menu-slider.service';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvel';
  constructor(public menuSevice: MenuSliderService){}

}
