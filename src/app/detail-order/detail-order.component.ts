import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../service/order.service';
import 'rxjs/add/operator/take';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css']
})
export class DetailOrderComponent implements OnInit , OnDestroy {

  id;
  order$;
  subscription :Subscription
  constructor(private route:ActivatedRoute,private orderService:OrderService) { 
    
  
   
    
    // console.log(this.order);
  }

async  ngOnInit() {
  this.id=this.route.snapshot.paramMap.get('id');
  // this.subscription= ( await this.orderService.getOrderByID(this.id)).subscribe(p=>this.order=p);
this.order$ = this.orderService.getOrderByID(this.id);
 }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
