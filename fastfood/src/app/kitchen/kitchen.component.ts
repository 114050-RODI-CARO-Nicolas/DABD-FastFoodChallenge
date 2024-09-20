import { Component, EventEmitter, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { Input } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';
import { OrderStatus } from '../models/order-status';
@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent implements OnChanges {
  @Input() ordersPendingCooking : Order[] = [];
  @Input() ordersCooking : Order[] = [];
  @Output() orderStartedCooking = new EventEmitter<void>();

  currentlyCooking = false;

  private orderService = inject(OrderService);

  ngOnChanges(changes: SimpleChanges): void {

    if(changes['ordersCooking'])
    {
      if(this.ordersCooking.length>0)
      {
        this.currentlyCooking = true;
      }
    }
  }

  startCookingOrder(orderNumber : number){
   
    this.orderService.updateOrderStatusService(orderNumber, OrderStatus.IN_COOK)
    this.orderStartedCooking.emit();

  }

  


}
