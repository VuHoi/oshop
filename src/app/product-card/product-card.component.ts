import { Component, OnInit, Input } from '@angular/core';
import { product } from '../models/product';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { ShoppingCart } from './../models/shopping-cart';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input('product')product;
@Input('shoping-cart')shoppingCart :ShoppingCart;
@Input('show-actions') showActions = true;
constructor(private shoppingcartService:ShoppingCartService) { }
addToCart()
{
this.shoppingcartService.addToCart(this.product)
}
ngOnInit() {
 
}
}
