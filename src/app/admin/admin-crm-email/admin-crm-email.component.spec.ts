import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCrmEmailComponent } from './admin-crm-email.component';

describe('AdminCrmEmailComponent', () => {
  let component: AdminCrmEmailComponent;
  let fixture: ComponentFixture<AdminCrmEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCrmEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCrmEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
