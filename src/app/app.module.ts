import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuSliderComponent } from './menu-slider/menu-slider.component';
import { TileCardsComponent } from './tile-cards/tile-cards.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { BannerFeaturedComponent } from './banner-featured/banner-featured.component';
import { ImageCardTileComponent } from './image-card-tile/image-card-tile.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { FeaturedCarouselComponent } from './featured-carousel/featured-carousel.component';
import { SignupBannerComponent } from './signup-banner/signup-banner.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { InspirationsComponent } from './inspirations/inspirations.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuSliderComponent,
    TileCardsComponent,
    HeroBannerComponent,
    BannerFeaturedComponent,
    ImageCardTileComponent,
    DownloadAppComponent,
    FeaturedCarouselComponent,
    SignupBannerComponent,
    SignupFormComponent,
    InspirationsComponent,
    LearnMoreComponent,
    FooterSectionComponent,
    FooterComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CarouselModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
