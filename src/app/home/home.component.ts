import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slideConfig1 = {"slidesToShow": 3, "slidesToScroll": 2, "autoPlay": true, "arrows": true, "dots": true};
  
  constructor() { }

  ngOnInit(): void {
  }

  slickInit() {
    // console.log('slick initialized');
  }
  
  breakpoint() {
    // console.log('breakpoint');
  }
  
  afterChange() {
    // console.log('afterChange');
  }
  
  beforeChange() {
    // console.log('beforeChange');
  }
}
