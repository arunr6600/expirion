import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card-tile',
  templateUrl: './image-card-tile.component.html',
  styleUrls: ['./image-card-tile.component.scss']
})
export class ImageCardTileComponent implements OnInit {
  @Input() date;
  @Input() subText;
  @Input() imageUrl;
  constructor() { }

  ngOnInit(): void {
  }

}
