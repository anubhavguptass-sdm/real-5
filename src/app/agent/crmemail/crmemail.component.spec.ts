import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMEmailComponent } from './crmemail.component';

describe('CRMEmailComponent', () => {
  let component: CRMEmailComponent;
  let fixture: ComponentFixture<CRMEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRMEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRMEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
