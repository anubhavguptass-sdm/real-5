import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  slideConfig1 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    autoPlay: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  currentSelection: boolean = true;
  showMainContent: boolean | undefined;


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

  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
 }
 selectedItem = 1;
 showTab = 1;
  tabToggle(index: any){
    this.showTab =index;
    this.selectedItem = index;
  }

}
