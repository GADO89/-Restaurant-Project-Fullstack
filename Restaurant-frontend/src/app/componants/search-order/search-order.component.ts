import { Component } from '@angular/core';
import {OrderServiceService} from "../../service/order-service.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrl: './search-order.component.css'
})
export class SearchOrderComponent {
  constructor(private orderService:OrderServiceService,
              private router: Router) {}

  doSearch(value: string) {
    this.router.navigateByUrl('/orders/'+ value)
  }
}
