import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAgentListComponent } from './agent-list.component';

describe('AdminAgentListComponent', () => {
  let component: AdminAgentListComponent;
  let fixture: ComponentFixture<AdminAgentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAgentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAgentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
