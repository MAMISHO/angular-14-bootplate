import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProducFileResponse } from '../models/entities/product-file.interface';
import { ILoadProcess } from '../models/entities/load-process.iterface';
import { LoadProcessDTO } from '../models/dtos/load-process.dto';
import { ResponseData } from '../models/entities/response-data.interface'

@Injectable({
  providedIn: 'root'
})
export class ImportService {
  private _baseUrlAPI = '/api/load-process';

  constructor(private httpClient: HttpClient) {}

  public loadProductsFile(formDataFormData: FormData): Observable<LoadProcessDTO> {
    return this.httpClient
      .post<ResponseData<ILoadProcess>>(`${this._baseUrlAPI}/import`, formDataFormData)
      .pipe(map((response) => new LoadProcessDTO(response.data)));
  }

  public getLoadProcess(): Observable<LoadProcessDTO[]> {
    return this.httpClient
      .get<ResponseData<ILoadProcess[]>>(`${this._baseUrlAPI}`)
      .pipe(map((response) => response.data.map((lp) => new LoadProcessDTO(lp))));
  }
}
