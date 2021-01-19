import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-framework/category';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-products-by-category',
  templateUrl: './view-products-by-category.component.html',
  styleUrls: ['./view-products-by-category.component.css']
})
export class ViewProductsByCategoryComponent implements OnInit {

  searchCategory: Category;
  productList: Product;

  constructor(private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.searchCategory = data.id;

    //  this.productsService.searchCategoryProducts(this.searchCategory).subscribe(categoryData =>{
    //    this.productList = categoryData;
    //  })

    });

    
  }

}
