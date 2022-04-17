import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Real5LeadsComponent } from './real5-leads.component';

describe('Real5LeadsComponent', () => {
  let component: Real5LeadsComponent;
  let fixture: ComponentFixture<Real5LeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Real5LeadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Real5LeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
