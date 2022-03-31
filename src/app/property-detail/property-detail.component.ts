import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  constructor() { }

  slideConfig1 = {"slidesToShow": 1, "slidesToScroll": 1, "autoPlay": true, "arrows": true, "dots": true};
  
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
