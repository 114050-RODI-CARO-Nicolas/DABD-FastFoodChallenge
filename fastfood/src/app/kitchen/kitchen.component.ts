import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Order } from '../models/order';
@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  @Input() ordersPendingCooking : Order[] = [];
  @Input() ordersCooking : Order[] = [];

  


}
