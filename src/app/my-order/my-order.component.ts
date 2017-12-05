import { Component, OnInit } from '@angular/core';
import { OrderService } from './../service/order.service';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
orders$;
orderID;
  constructor(
    private orderService:OrderService,
    private authService:AuthService,
   
  ) {
   
  
 
   }

  ngOnInit() {
    this.orders$=this.authService.user$.switchMap(user=>this.orderService.getOrderByUser(user.uid));
  }

}
