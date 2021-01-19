export interface Product {
   createProduct(newProduct: {  id: number;
      name:  string;
      image: string;
      price:  number;
      description: string;
      is_available:boolean,
      quantity:number
      brand:string;
      color: string;
      category_id: number;
      rating: number; });
  
   id: number;
   name:  string;
   image: string;
   price:  number;
   description: string;
   is_available:boolean,
   quantity:number
   brand:string;
   color: string;
   category_id: number;
   rating: number;
   }

