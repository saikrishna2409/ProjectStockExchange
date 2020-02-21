import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpUrl="http://localhost:3001/company/";
  constructor(private httpClient:HttpClient) { }
  getAllAdmin(): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(this.httpUrl);
  }
  saveAdmin(admin:Admin):Observable<Admin>{
    return this.httpClient.post<Admin>(this.httpUrl,admin);

  }
  deleteAdmin(id:number):Observable<Admin>{
    return this.httpClient.delete<Admin>(this.httpUrl + id);
  }
  updateAdminInfo(admin:Admin):Observable<Admin>{
    return this.httpClient.put<Admin>(this.httpUrl+admin.id,admin);
  }
  getAdminById(id:number):Observable<Admin>{
    return this.httpClient.get<Admin>(this.httpUrl + id);
  }
}
