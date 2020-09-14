 
/**
* @author Arun R
* Description - This component is used to  showcase the feature stories  avatar tiles 
*/

 import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-banner-featured',
  templateUrl: './banner-featured.component.html',
  styleUrls: ['./banner-featured.component.scss']
})
export class BannerFeaturedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({});
  }

//  Feature stories  avatar cards looping here //

  imageTiles =[
    {
      subText: 'At iam decimum annum in spelunca iacet.',
      date : '1 jan 2020',
      imageUrl: '../../assets/images/avatar1.svg'
    },
    {
      subText: 'At iam decimum annum in spelunca iacet.',
      date: '10 jan 2020',
      imageUrl: '../../assets/images/avatar2.svg'
    },
    {
      subText: 'At iam decimum annum in spelunca iacet.',
      date: '18 Feb 2020',
      imageUrl: '../../assets/images/avatar3.svg'
    },
    {
      subText: 'At iam decimum annum in spelunca iacet.',
      date: '10 Mar 2020',
      imageUrl: '../../assets/images/avatar4.svg'
    },
  ]
}
