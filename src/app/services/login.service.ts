import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  OnLogin(obj:any):Observable<any>{
   return this.http.post("http://onlinetestapi.gerasim.in/api/Account",obj);
  }
  getAllCustomer():Observable<any>{
    debugger
    return this.http.get("http://onlinetestapi.gerasim.in/api/Master/GetAllCustomer");
  }

}
