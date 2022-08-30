import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductDTO } from '../models/dtos/product.dto';
import { IProduct, ProductListResponse } from '../models/entities/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private _urlProducts = '/api/products';
  constructor(private httpClient: HttpClient) {}

  public findAllProducts(): Observable<ProductDTO[]> {
    return this.httpClient
      .get<ProductListResponse>(`${this._urlProducts}`)
      .pipe(map((response) => response.data.map((product: IProduct) => new ProductDTO(product))));
  }
}
