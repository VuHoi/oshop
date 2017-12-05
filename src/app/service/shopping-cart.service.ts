import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { async } from '@angular/core/testing';
import { product } from '../models/product';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { ShoppingCart } from './../models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) {   }
  private create() {
    return this.db.list('/shopping-cart').push({
      dateCreateed: new Date().getTime()

    });
  }

  async getCart() :Promise<Observable<ShoppingCart>>{
    let cartID= await this.getOrCreateaCartID();
    return this.db.object('/shopping-cart/' + cartID).map(x=>new ShoppingCart(x.items));
  }


  private async getOrCreateaCartID() :Promise<string> {
    let cartID = localStorage.getItem("cartID");
    if (cartID) return cartID;
    let result = await this.create();
    localStorage.setItem('cartID', result.key);
    return result.key;



  }

  async  addToCart(product: product)  {
   this.updateItemQuantity(product,1);
  }

  async  removeFromCart(product: product) {
    this.updateItemQuantity(product,-1);
  }


  async clearCart()
  {
   let cartID= await this.getOrCreateaCartID();
    this.db.object('/shopping-cart/'+cartID+'/items/').remove();

  }
  private async updateItemQuantity(product : product ,change:number)
  {
    let cartID = await this.getOrCreateaCartID();
    let item$ = this.db.object('/shopping-cart/' + cartID + '/items/' + product.$key);
    item$.take(1).subscribe(item => {
      let quantity=(item.quantity ||0) + change;
      if(quantity===0)item$.remove();
      else  item$.update({
         title:product.title,
imageUrl:product.imageUrl,
price:product.price,

          quantity: quantity })
    
    })
  }

  
}
