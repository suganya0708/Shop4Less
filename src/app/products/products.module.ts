import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ListAllProductsComponent } from './list-all-products/list-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductsByDateComponent } from './view-products-by-date/view-products-by-date.component';
import { ViewProductsByCategoryComponent } from './view-products-by-category/view-products-by-category.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent, 
    CreateProductComponent, 
    ViewProductComponent,
    ListAllProductsComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewProductsByDateComponent,
    ViewProductsByCategoryComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
 
})
export class ProductsModule { }
