import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {


  httpUrl="http://localhost:8080/stockexchange/";
  stock=Stock;
  constructor(private httpClient:HttpClient,@Inject(HttpClient) private ht) { }
  
  getAllStock(): Observable<Stock[]>{
    return this.httpClient.get<Stock[]>(this.httpUrl);
  }
  saveStock(stock:Stock):Observable<Stock>{
    return this.httpClient.post<Stock>(this.httpUrl,stock);

  }
  deleteStock(id:number):Observable<Stock>{
    return this.ht.delete(this.httpUrl + id);
  }
  updateStockInfo(stock:Stock):Observable<Stock>{
    return this.ht.put(this.httpUrl,stock);
  }
  getStockById(id:number):Observable<Stock>{
    return this.ht.get(this.httpUrl + id);
  }
}
