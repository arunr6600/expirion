import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-signup-banner',
  templateUrl: './signup-banner.component.html',
  styleUrls: ['./signup-banner.component.scss']
})
export class SignupBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
       AOS.init({});
  }

}
