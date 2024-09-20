import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPointComponent } from './delivery-point.component';

describe('DeliveryPointComponent', () => {
  let component: DeliveryPointComponent;
  let fixture: ComponentFixture<DeliveryPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryPointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
