import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  
 

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }
  addNewProduct(form) {

    let newProduct = {
      id: 11,
      categoryId: form.product_category,
      productName: form.product_name,
      description: form.product_description,
      price: form.product_price,
      is_available: 1,
      rating: form.product_rating,
      reviews: form.product_reviews,
      color: form.product_color
    
  };

   this.productsService.createProduct(newProduct).subscribe(data =>
    {
      console.log(data);

    });
  }
}
