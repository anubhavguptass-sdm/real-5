import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  mapAreaFlag: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  viewMap() {
    this.mapAreaFlag = !this.mapAreaFlag;
  }

}
