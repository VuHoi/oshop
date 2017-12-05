import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'product-quatity',
  templateUrl: './product-quatity.component.html',
  styleUrls: ['./product-quatity.component.css']
})
export class ProductQuatityComponent implements OnInit {

  @Input('product')product;

  @Input('shoping-cart')shoppingCart;
    constructor(private shoppingcartService:ShoppingCartService) { }
    addToCart()
    {
  this.shoppingcartService.addToCart(this.product)
    }
  
    removeFromCart()
    {
      this.shoppingcartService.removeFromCart(this.product);
    }
    ngOnInit() {
     
    }
  

}
