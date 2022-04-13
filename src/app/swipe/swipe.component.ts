import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";
  
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss']
})
export class SwipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
