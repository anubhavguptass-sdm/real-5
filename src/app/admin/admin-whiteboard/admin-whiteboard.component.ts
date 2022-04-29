import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-whiteboard',
  templateUrl: './admin-whiteboard.component.html',
  styleUrls: ['./admin-whiteboard.component.scss']
})
export class AdminWhiteboardComponent implements OnInit {
  
  currentSelection: boolean = true;
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
