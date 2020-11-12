import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId = 0;
  productDetails: Product;
  constructor(private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
        this.productId = data.id;
    
    this.productsService.viewProduct(this.productId).subscribe(productData =>{
      this.productDetails = productData;
    })


      });
  
  }


  updateProduct(form){

    let updateproduct = {
      id: form.value.id,
      categoryId: form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      price: form.value.product_price,
      is_available: 1,
      rating: form.value.product_rating,
      reviews: form.value.product_reviews,
      color: form.value.product_color
    
  };

   this.productsService.updateProduct(this.productId, updateproduct)
  }

}
