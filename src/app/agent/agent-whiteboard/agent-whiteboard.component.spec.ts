import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentWhiteboardComponent } from './agent-whiteboard.component';

describe('AgentWhiteboardComponent', () => {
  let component: AgentWhiteboardComponent;
  let fixture: ComponentFixture<AgentWhiteboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentWhiteboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentWhiteboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
