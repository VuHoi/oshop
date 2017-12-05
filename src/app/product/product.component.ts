import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './../service/product.service';
import { CategoryService } from './../service/category.service';
import { ActivatedRoute } from '@angular/router';
import { product } from './../models/product';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  
  products: product[] = [];
  filterProducts: product[] = [];
cart:any;
  category: string;
  subscription:Subscription;
  constructor(
    private route: ActivatedRoute,
    private propductService: ProductService,
    private shoppingCartService: ShoppingCartService

  ) {
 
    this.propductService.getAll().switchMap(p => {
      this.products = p;
     
      return this.route.queryParamMap;
    })
      .subscribe(params => {
        this.category = params.get("category");

        this.filterProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) : this.products;
        
      });





  }

 async ngOnInit() {
  this.subscription= (await this.shoppingCartService.getCart()).subscribe(cart=>{
      this.cart=cart
  })
}
ngOnDestroy() {
  this.subscription.unsubscribe();
  }
}
