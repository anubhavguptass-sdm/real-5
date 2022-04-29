import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-crm-email',
  templateUrl: './admin-crm-email.component.html',
  styleUrls: ['./admin-crm-email.component.scss']
})
export class AdminCrmEmailComponent implements OnInit {
  showMainContent: boolean | undefined;

  constructor() {

  }

  ngOnInit(): void {
  }

  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
  }
  selectedItem = 1;
  showTab = 1;
  tabToggle(index: any) {
    this.showTab = index;
    this.selectedItem = index;
  }

}
