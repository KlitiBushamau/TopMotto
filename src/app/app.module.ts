import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SwiperModule } from 'swiper/angular';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { ContactComponent } from './contact/contact.component';
import { DeilsComponent } from './deils/deils.component';
import { OrivacyComponent } from './orivacy/orivacy.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './homeshared/hero/hero.component';
import { CarsComponent } from './homeshared/cars/cars.component';
import { NewsComponent } from './homeshared/news/news.component';
import { CustomersComponent } from './homeshared/customers/customers.component';
import { MapComponent } from './homeshared/map/map.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    ContactComponent,
    DeilsComponent,
    OrivacyComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    CarsComponent,
    NewsComponent,
    CustomersComponent,
    MapComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule,
    SlickCarouselModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
