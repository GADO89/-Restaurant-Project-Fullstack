import { Injectable } from '@angular/core';
import {CartOrder} from "../model/cart-order";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  orders: CartOrder[]= [];
  totalOrders : Subject<number>=new BehaviorSubject<number>(0);
  totalPrice  : Subject<number>=new BehaviorSubject<number>(0);
  constructor() { }

  addOrderToCart(order: CartOrder){
    let isExist: boolean=false;
    // @ts-ignore
    let existOrder: CartOrder= undefined;
    if (this.orders.length > 0){
    //   for (let temp of this.orders){
    //     if (temp.id ===  order.id){
    //      existOrder = temp;
    //      break;
    //     }
    //   }
      // @ts-ignore
      existOrder= this.orders.find(temp => temp.id === order.id);

      }
    // @ts-ignore
    isExist= (existOrder !=undefined);
    if (isExist){
      // @ts-ignore
      existOrder.quantity++;
    }  else {
      this.orders.push(order)
    }
    console.log(this.orders)
    this.calculateTotals()
  }

  calculateTotals(){
  let totalElementSizeOrder: number=0;
    let totalPriceOrder: number=0;
    for (let temp of this.orders){
      totalElementSizeOrder += temp.quantity;
      totalPriceOrder +=  temp.quantity  * temp.price;
    }
    this.totalOrders.next(totalElementSizeOrder) ;
    this.totalPrice.next(totalPriceOrder) ;
    console.log(this.totalOrders)
    console.log( this.totalPrice)
  }

  removeOrder(order: CartOrder){
    order.quantity--;
    if (order.quantity === 0){
      this.remove(order)
    } else {
      this.calculateTotals()
    }
  }

   remove(order: CartOrder) {
  const index = this.orders.findIndex( temp => temp.id=== order.id)
    if (index > -1){
      this.orders.splice(index, 1)
      this.calculateTotals()
    }
  }
}
