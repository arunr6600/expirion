import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileCardsComponent } from './tile-cards.component';

describe('TileCardsComponent', () => {
  let component: TileCardsComponent;
  let fixture: ComponentFixture<TileCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
