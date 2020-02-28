import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Sector } from '../models/Sector';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  httpUrl = 'http://localhost:8080/sector/';

  constructor(private httpClient : HttpClient, @Inject (HttpClient) private ht) { }
  getAllSectors() : Observable<Sector[]>{
    return this.httpClient.get<Sector[]>(this.httpUrl);
 
  }

  saveSector(sector : Sector):Observable<Sector>{
    return this.httpClient.post<Sector>(this.httpUrl,sector);
  }
  deleteSector(id : number):Observable<Sector> {
    return this.httpClient.delete<Sector>(this.httpUrl+id)
      }
      update(sector : Sector) :Observable<Sector>{
        return this.ht.put("http://localhost:8080/sector/",sector);
      }
      getSectorById(id:number) : Observable<Sector>{
        return this.ht.get(`http://localhost:8080/sector/${id}`);
      }
      isAdmin() : boolean{
        return true;
      }
}
