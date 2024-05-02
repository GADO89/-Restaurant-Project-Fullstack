import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CategoryItemsComponent } from './componants/category-items/category-items.component';
import {RouterModule, Routes} from "@angular/router";
import { DropdownMenuComponent } from './componants/dropdown-menu/dropdown-menu.component';
import { SearchOrderComponent } from './componants/search-order/search-order.component';
import { OrderDetailsComponent } from './componants/order-details/order-details.component';
import {NgbPaginationModule, NgbPagination, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {OrderItemsComponent} from "./componants/order-items/order-items.component";
import { CardStatusComponent } from './componants/card-status/card-status.component';
import { PurchasesComponent } from './componants/purchases/purchases.component';
import { CheckOutComponent } from './componants/check-out/check-out.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes =[
  // http://localhost:4200/checkout
  {path: 'checkout', component: CheckOutComponent},
  // http://localhost:4200/purchases
  {path: 'purchases', component: PurchasesComponent},
  // http://localhost:4200/orders.order/id
  {path: 'order/:id', component: OrderDetailsComponent},
  // http://localhost:4200/category
{path: 'category/:id', component: OrderItemsComponent},
  // http://localhost:4200/orders/key
  {path: 'category', component: OrderItemsComponent},
  // http://localhost:4200/orders/key
  {path: 'orders/:key', component: OrderItemsComponent},
  // http://localhost:4200/orders
  {path: 'orders', component: OrderItemsComponent},
  // http://localhost:4200/s
  {path: '', redirectTo: '/orders', pathMatch:'full'},
  // If the user enter any digits other than the all routes
  {path: '**', redirectTo: '/orders', pathMatch:'full'},
]

// // http://localhost:4200/
// {path: '', component: OrdeItemsComponent}
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemsComponent,
    DropdownMenuComponent,
    SearchOrderComponent,
    OrderDetailsComponent,
    CardStatusComponent,
    PurchasesComponent,
    CheckOutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbPagination,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
