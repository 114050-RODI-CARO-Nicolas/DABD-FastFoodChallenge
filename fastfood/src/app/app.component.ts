import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PointOfSellComponent } from "./point-of-sell/point-of-sell.component";
import { OrderService } from './services/order.service';
import { Order } from './models/order';
import { OrderStatus } from './models/order-status';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PointOfSellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'fastfood';

  orders : Order[] = []
  pendingOrders : Order[] = [];
 

  private orderService = inject(OrderService)

  
  ngOnInit(): void {
    this.getOrdersPendingCooking();

  }

  onNewOrderAdded(){
    this.getOrdersPendingCooking();
  }

  getAllOrders(){
    console.log('get all orders at appcomponents')
    this.orders = this.orderService.getAllOrdersService();

  }

  getOrdersPendingCooking(){
    this.orders = this.orderService.getOrdersByStatus(OrderStatus.PENDING_COOK);
    console.log("this.orders en getOrdersPendingCooking en appComponent ", this.orders)
  }


}
