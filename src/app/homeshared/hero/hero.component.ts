import { Component, OnInit } from '@angular/core';
import Swipper, { SwiperOptions, Pagination } from 'swiper';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public swipperVonfig: SwiperOptions = {
    pagination: true,
  }

  constructor() { }

  ngOnInit(): void {
    Swipper.use([Pagination]);
  }
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
}
