import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { OrderStatus } from '../models/order-status';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders : Order[] = [];


   
  addOrder(order : Order)
  {
    console.log('order at service.addOrder ', order)
    this.orders.push(order);
  }

  getAllOrders(){
    return this.orders;
  }


  // Por alguna razon no me funcionan cuando los llamo desde un metodo en appcomponent que a su vez es llamado por ngOnInit

  getOrdersPendingCooking(){
 
    return this.orders.filter(order => order.status === OrderStatus.PENDING_COOK);
  
  }

  getOrdersInCooking(){
    return this.orders.filter(order => order.status === OrderStatus.IN_COOK);
   
    
  }

  getOrdersReadyForDelivery(){
   return this.orders.filter(order => order.status === OrderStatus.READY_FOR_DELIVERY);
  }

  

 
}
