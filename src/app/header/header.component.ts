/**
 * @author Arun R
 * Description - This  is used to hadle the  function related to header component
 */



import { Component, HostListener, OnInit } from '@angular/core';
import { MenuSliderService } from '../common/menu-slider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public menuService: MenuSliderService) { }

  ngOnInit(): void {
  }
status :boolean = false;


burgerIcon(){
  this.menuService.toggleMenu();
}

}

