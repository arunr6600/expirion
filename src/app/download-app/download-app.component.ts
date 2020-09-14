import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-download-app',
  templateUrl: './download-app.component.html',
  styleUrls: ['./download-app.component.scss']
})
export class DownloadAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
    
    });
  }

}
