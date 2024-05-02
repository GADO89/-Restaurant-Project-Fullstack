import {Component, OnInit} from '@angular/core';
import {Order} from "../../model/Order";
import {OrderServiceService} from "../../service/order-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartServiceService} from "../../service/cart-service.service";
import {CartOrder} from "../../model/cart-order";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit{

  order!: Order;
  constructor(private orderService: OrderServiceService,
              private route:ActivatedRoute,
              private router: Router,
              private cartService: CartServiceService)  {}

  ngOnInit(): void{
    this.getOrder()
  }

  getOrder(){
    let id = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(id).subscribe(
      data=>{
        this.order= data
      }

    )
  }


  addToCart(order: Order) {
  const orderCart= new CartOrder(order);
  this.cartService.addOrderToCart(orderCart)
  this.cartService.addOrderToCart(orderCart)
  }
}
