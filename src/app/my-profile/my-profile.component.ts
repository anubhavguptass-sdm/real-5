import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedItem = 1;
  showTab = 1;
  tabToggle(index: any){
    this.showTab =index;
    this.selectedItem = index;
    
  }

}


