import { ShoppingCartItems } from "./shopping-cart-items";
import { Observable } from 'rxjs/Observable';
import { product } from "./product";



export class ShoppingCart {

    items: ShoppingCartItems[] = [];
    constructor(public itemMap: { [productID: string]: ShoppingCartItems }) {
        this.itemMap=itemMap||{};
        for (let productID in itemMap) {
            let item = itemMap[productID];
            // let x: ShoppingCartItems = new ShoppingCartItems();

            // Object.assign(x, item);            
            // x.$key = productID;
         
            this.items.push( new ShoppingCartItems(
                {
                    ...item,
                    $key : productID 
                }
            ));
        }

    }

    get ProductIDs() {
        return Object.keys(this.itemMap);
    }
    get totalItemCount() {
        let count = 0;
        for (let productID in this.itemMap) {

            count += this.itemMap[productID].quantity;

        }

        return count;
    }
    getQuantity(product: product) {
       
          
         let item = this.itemMap[product.$key];

        return item ? item.quantity : 0;
    
    }
    get totalPrice() {
        let sum = 0;
        for (let productID in this.items) {
            sum += this.items[productID].totalPrice;
        }
        return sum;
    }

}