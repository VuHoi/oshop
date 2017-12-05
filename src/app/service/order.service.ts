import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { ShoppingCartService } from './shopping-cart.service';
import { Order } from './../models/orders';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }
  async storeOrder(order) {
    let result = await this.db.list('/orders').push(order)
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() {
    return this.db.list('/orders');
  }
 getOrderByID(id:string)
{
  return this.db.object('/orders/'+id);
}
  getOrderByUser(userID: string) {
    return this.db.list('/orders', {
      query:
        {
orderByChild:'userID',
equalTo:userID
        }
    });
  }
}
