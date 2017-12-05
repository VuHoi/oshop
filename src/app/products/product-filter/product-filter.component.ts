import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  category$;
  @Input ('category') category;
  constructor(private categoryService:CategoryService) {
  
    this.category$=this.categoryService.getCategory();

   }

  ngOnInit() {
  }

}
