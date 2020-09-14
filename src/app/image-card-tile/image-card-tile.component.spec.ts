import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardTileComponent } from './image-card-tile.component';

describe('ImageCardTileComponent', () => {
  let component: ImageCardTileComponent;
  let fixture: ComponentFixture<ImageCardTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCardTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
