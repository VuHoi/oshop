import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../service/product.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { product } from '../../models/product';
// import { DataTableResource } from 'angular-4-data-table';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
//  tableResource:DataTableResource<product>;
  private products:product[];
  subscription : Subscription;
  public filterProduct :any[];
  // items:any[];
  // itemCount:number;
  constructor( private productService :ProductService) { 
  this.subscription=   this.productService.getAll().subscribe(p=>
    {
      this.filterProduct=this.products=p;
    this.initializeTable(this.products);
    });

  
    
  }

  reloadItem(params){
    // if(!this.tableResource)return;
    // this.tableResource.query(params).then(items=>this.items=items);
  }
 initializeTable(products:product[])
 {
  // this.tableResource=new DataTableResource(this.products);
  // this.tableResource.query({offset:0}).then(items=>this.items=items);
  // this.tableResource.count().then(count=>this.itemCount=count);
 }
  filter(query:string)
  {
    this.filterProduct=(query)?
    this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):this.products;
  }
  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
      }
}
