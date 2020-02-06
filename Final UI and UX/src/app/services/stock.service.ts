import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {


  httpUrl="http://localhost:3000/stock/";
  constructor(private httpClient:HttpClient) { }
  getAllStock(): Observable<Stock[]>{
    return this.httpClient.get<Stock[]>(this.httpUrl);
  }
  saveStock(admin:Stock):Observable<Stock>{
    return this.httpClient.post<Stock>(this.httpUrl,admin);

  }
  deleteStock(id:number):Observable<Stock>{
    return this.httpClient.delete<Stock>(this.httpUrl + id);
  }
  updateStockInfo(admin:Stock):Observable<Stock>{
    return this.httpClient.put<Stock>(this.httpUrl+admin.id,admin);
  }
  getStockById(id:number):Observable<Stock>{
    return this.httpClient.get<Stock>(this.httpUrl + id);
  }
}
