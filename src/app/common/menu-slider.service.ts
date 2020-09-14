/**
 * @author Arun R
 * Description - This service is used to handle the  functions related to menubar
 */

import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class MenuSliderService {
  public isMenuOpen = false;
  constructor() {}

  // This function is used to  toggle the menubar via burger icon  //

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
