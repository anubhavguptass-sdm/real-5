import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWhiteboardComponent } from './admin-whiteboard.component';

describe('AdminWhiteboardComponent', () => {
  let component: AdminWhiteboardComponent;
  let fixture: ComponentFixture<AdminWhiteboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWhiteboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWhiteboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
