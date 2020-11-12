import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import {CreateProductComponent} from './create-product/create-product.component'
import {ViewProductComponent} from './view-product/view-product.component'
import {ListAllProductsComponent} from './list-all-products/list-all-products.component'
import { ViewProductsByCategoryComponent } from './view-products-by-category/view-products-by-category.component';
import { ViewProductsByDateComponent } from './view-products-by-date/view-products-by-date.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import {UpdateProductComponent } from './update-product/update-product.component'

const routes: Routes = [
{ path: '', component: ListAllProductsComponent },
{ path: 'create-products', component: CreateProductComponent },
{ path: 'products/:id', component: ViewProductComponent},
{ path: 'category/:id', component:  ViewProductsByCategoryComponent},
{ path: 'search', component: ViewProductsByDateComponent},
{ path: 'delete-product/:id', component:  DeleteProductComponent},
{ path: 'update-product/:id', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
