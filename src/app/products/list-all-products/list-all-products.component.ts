import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list-all-products',
  templateUrl: './list-all-products.component.html',
  styleUrls: ['./list-all-products.component.css']
})
export class ListAllProductsComponent implements OnInit {

  products: Product[];
  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.productsService.findAll().subscribe(data =>{
      this.products = data;
    });
  }

}
