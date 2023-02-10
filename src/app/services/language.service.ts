import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http:HttpClient) { }

  getlanguageslist():Observable<any[]> {
    return this.http.get<any[]>('https://storeapi.gerasim.in/api/Interview/GetLanguage');
  }

  addLanguage(obj:any):Observable<any> {
    return this.http.post<any>('http://storeapi.gerasim.in/api/Interview/addLanguage',obj);
  }
}

