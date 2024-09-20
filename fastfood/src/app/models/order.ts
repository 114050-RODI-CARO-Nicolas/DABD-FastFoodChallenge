import { OrderStatus } from "./order-status";

export class Order {

    numero : number = 0 ;
    nombre : string = "";
    descripcion : string = "";
    status: OrderStatus = OrderStatus.PENDING_COOK

}
