import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {
cart$;
  constructor(private shoppingCartService :ShoppingCartService) { }

 async ngOnInit() {
  this.cart$ = await  this.shoppingCartService.getCart();
  // shoppingCart.getQuantity(product)
 
  }

}
