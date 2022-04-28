import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.scss']
})
export class AgentDetailComponent implements OnInit {

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
