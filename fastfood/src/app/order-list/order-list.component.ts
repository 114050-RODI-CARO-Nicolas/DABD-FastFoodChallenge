import { Component, Input } from '@angular/core';

import { Order } from '../models/order';
@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {
  @Input() ordersPendingCooking : Order[] = [];

}
