import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from '../models/orders';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from '../models/shopping-cart';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { OrderService } from '../service/order.service';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
 public shipping = {};
  @Input ('cart')cart:ShoppingCart;
  userID: string;
  cartSubscription: Subscription;
  userSubscription: Subscription;
  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService,
    private shoppingCartService: ShoppingCartService
  ) { }


  async placeOrder() {
    let order = new Order(this.userID, this.shipping, this.cart);

    let result = await this.orderService.storeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }
  async ngOnInit() {
    // let cart$ = await this.shoppingCartService.getCart()
    // this.cartSubscription = cart$.subscribe(cart => this.cart = cart);

    this.userSubscription = this.authService.user$.subscribe(user => this.userID = user.uid);
  }
  ngOnDestroy() {
    // this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
 