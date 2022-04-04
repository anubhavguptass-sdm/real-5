import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetReal5AgentComponent } from './meet-real5-agent.component';

describe('MeetReal5AgentComponent', () => {
  let component: MeetReal5AgentComponent;
  let fixture: ComponentFixture<MeetReal5AgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetReal5AgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetReal5AgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
