import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyReal5AgentComponent } from './why-real5-agent.component';

describe('WhyReal5AgentComponent', () => {
  let component: WhyReal5AgentComponent;
  let fixture: ComponentFixture<WhyReal5AgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyReal5AgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyReal5AgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
