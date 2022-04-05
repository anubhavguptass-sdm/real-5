import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPropertyOnlineComponent } from './sell-property-online.component';

describe('SellPropertyOnlineComponent', () => {
  let component: SellPropertyOnlineComponent;
  let fixture: ComponentFixture<SellPropertyOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellPropertyOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPropertyOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
