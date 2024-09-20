import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointOfSellComponent } from './point-of-sell.component';

describe('PointOfSellComponent', () => {
  let component: PointOfSellComponent;
  let fixture: ComponentFixture<PointOfSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointOfSellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointOfSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
