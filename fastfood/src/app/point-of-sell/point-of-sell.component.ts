import { Component, EventEmitter, Output, inject } from '@angular/core';
import { OrderService } from '../services/order.service';
import { FormsModule, NgForm } from '@angular/forms';
import { OrderStatus } from '../models/order-status';
import { Order } from '../models/order';
@Component({
  selector: 'app-point-of-sell',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './point-of-sell.component.html',
  styleUrl: './point-of-sell.component.css'
})
export class PointOfSellComponent {

  @Output() newOrderAdded = new EventEmitter<void>();
  private orderService = inject(OrderService);
  onSubmit(form : NgForm)
  { 
    if(form.valid)
    {
     
      const newOrder : Order = {
        numero : Math.floor(Math.random()*1000) + 1,
        nombre : form.value.consumerName,
        descripcion : form.value.orderDescription,
        status : OrderStatus.PENDING_COOK
      };
      this.orderService.addOrderService(newOrder); // pushea datos al service
      this.newOrderAdded.emit(); //avisa a componente padre que hay datos nuevos para que actue en consecuencia
    }

  }

}
