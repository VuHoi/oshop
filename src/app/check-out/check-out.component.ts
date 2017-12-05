import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { async } from '@angular/core/testing';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../service/order.service';
import { AuthService } from '../service/auth.service';
import { Order } from './../models/orders';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{
 

cart$:Observable<ShoppingCart>;



  constructor(private shoppingCartService:ShoppingCartService) { }

  async ngOnInit() {
  this.cart$=await  this.shoppingCartService.getCart();
 

  }
  
}
