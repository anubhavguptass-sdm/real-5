import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crmemail',
  templateUrl: './crmemail.component.html',
  styleUrls: ['./crmemail.component.scss']
})
export class CRMEmailComponent implements OnInit {
  showMainContent: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
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
