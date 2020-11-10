export interface Product {
   createProduct(newProduct: { id: number; categoryId: any; productName: any; description: any; price: any; is_available: number; rating: any; reviews: any; color: any; });
   productId: string;
   productName : string;
   rating: string;
   price: number;
   productImg: string;
   categoryId: number;
   isAvailable: boolean;
   description: String;

   }

