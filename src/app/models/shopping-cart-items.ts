import { product } from './product';

export class ShoppingCartItems{
$key:string;
title:string;
price:number;
imageUrl:string;
quantity:number;

constructor(init? :Partial<ShoppingCartItems>)
{ 
    Object.assign(this,init);
}
get totalPrice()
{
    return this.price*this.quantity;
}
}