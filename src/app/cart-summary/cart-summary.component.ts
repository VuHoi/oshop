import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from './../models/shopping-cart';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
@Input('cart')cart:ShoppingCart;
  constructor() { }

  ngOnInit() {
  }

}
