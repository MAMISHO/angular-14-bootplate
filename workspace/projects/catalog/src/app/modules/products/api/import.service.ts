import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProducFileResponse } from '../models/entities/product-file.interface';

@Injectable({
  providedIn: 'root'
})
export class ImportService {
  private _urlImports = '/api/import';

  constructor(private httpClient: HttpClient) {}

  public loadProductsFile(formDataFormData: FormData): Observable<Boolean> {
    return this.httpClient
      .post<ProducFileResponse>(`${this._urlImports}/products`, formDataFormData)
      .pipe(map((response) => response.data));
  }
}
