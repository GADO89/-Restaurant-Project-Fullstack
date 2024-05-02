// @ts-nocheck
import {CartOrder} from "./cart-order";

export class Item {

  img:string;
  quantity:number;
  price:string;

  constructor(order: CartOrder) {
   this.img = order.img;
    this.quantity = order.quantity;
    this.price = order.price;

  }
}
