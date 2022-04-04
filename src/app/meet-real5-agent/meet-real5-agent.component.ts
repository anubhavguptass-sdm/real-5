import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-real5-agent',
  templateUrl: './meet-real5-agent.component.html',
  styleUrls: ['./meet-real5-agent.component.scss']
})
export class MeetReal5AgentComponent implements OnInit {

  forgotPwdFlag: boolean = false;
  loginRegisterFlag: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
