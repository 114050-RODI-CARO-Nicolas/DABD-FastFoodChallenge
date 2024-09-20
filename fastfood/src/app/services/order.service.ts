import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { OrderStatus } from '../models/order-status';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders : Order[] = [];


   
  addOrderService(order : Order)
  {
    console.log('order at service.addOrder ', order)
    this.orders.push(order);
  }

  getAllOrdersService(){
    return this.orders;
  }

  getOrdersByStatusService(status : OrderStatus):Order[]{
    return this.orders.filter(order=> order.status === status);
  }




  

 
}
