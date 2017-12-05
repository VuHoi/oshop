import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../service/category.service';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../../service/product.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
category$;  
public product={};
id;
  constructor(
    private route:ActivatedRoute,
    private router:Router ,
     private categoryService :CategoryService,
     private productService:ProductService) {
    this.category$=categoryService.getCategory();
    this.id=this.route.snapshot.paramMap.get('id');
    if(this.id)this.productService.getProduct(this.id).take(1).subscribe(p=>this.product=p);
      
   }
   save(product)
   {
     if(this.id)this.productService.updateProduct(this.id,product);
     else 
     this.productService.create(product);
     this.router.navigate(['/admin/products']);
   }
delete()
{
  if(!confirm("Are you sure you want to  delete this product  ?"))
  { return ; }
    this.productService.deleteProduct(this.id);
    this.router.navigate(['/admin/products']);
 
}
  
  ngOnInit() {
  }

}
