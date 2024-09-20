import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PointOfSellComponent } from "./point-of-sell/point-of-sell.component";
import { OrderService } from './services/order.service';
import { Order } from './models/order';
import { OrderStatus } from './models/order-status';
import { KitchenComponent } from "./kitchen/kitchen.component";
import { OrderListComponent } from "./order-list/order-list.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PointOfSellComponent, KitchenComponent, OrderListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'fastfood';

  orders : Order[] = []
  pendingOrders : Order[] = [];
  cookingOrders : Order[] = [];
 

  private orderService = inject(OrderService)

  
  ngOnInit(): void {
    this.getOrdersPendingCooking();

  }

  onNewOrderAdded(){
    this.getOrdersPendingCooking();
  };

  onOrderStartedCooking(){
    this.getOrdersPendingCooking();
    this.getOrdersCooking();
  }

  getAllOrders(){
    console.log('get all orders at appcomponents')
    this.orders = this.orderService.getAllOrdersService();

  }

  getOrdersPendingCooking(){
    this.pendingOrders = this.orderService.getOrdersByStatusService(OrderStatus.PENDING_COOK);
    console.log("this.orders en getOrdersPendingCooking en appComponent ", this.orders)
  
  }

  getOrdersCooking(){
    this.cookingOrders = this.orderService.getOrdersByStatusService(OrderStatus.IN_COOK);
  }


}
