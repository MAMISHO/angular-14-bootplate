import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductApiService } from '../api/product-api.service';
import { ProductDTO } from '../models/dtos/product.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {
  constructor(private productApiService: ProductApiService) {}

  public getAllProducts(): Observable<ProductDTO[]> {
    return this.productApiService.findAllProducts();
  }
}
