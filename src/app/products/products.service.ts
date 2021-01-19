import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from './product';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productUrl: string;

  constructor(private httpClient: HttpClient){ 
    this.productUrl = 'http://localhost:8080/products';
  }


  public findAll(): Observable<Product[]>{
      return this.httpClient.get<Product[]>(this.productUrl);
  }
  


}
