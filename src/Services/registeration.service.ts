import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
let baseURL = '';

@Injectable({
    providedIn:'root'
})

export class RegisterationService {

    constructor(private httpClient: HttpClient) { }
  
    readAll(URL:any): Observable<any> {
     // baseURL='http://localhost:38230/Consultant/GetConsultantDetails'
      return this.httpClient.get(URL);
    }
  
    read(id: any): Observable<any> {
      return this.httpClient.get(`${baseURL}/${id}`);
    }
  
    create(URL:any,data: any): Observable<any> {
      
      return this.httpClient.post(URL, data);
    }

    login(data: any): Observable<any> {
      baseURL = 'http://localhost:38230/Authenticate/Login'
    return this.httpClient.post(baseURL, data);
  }

    update(id: any, data: any): Observable<any> {
      return this.httpClient.put(`${baseURL}/${id}`, data);
    }
  
    delete(id: any): Observable<any> {
      return this.httpClient.delete(`${baseURL}/${id}`);
    }
  
    deleteAll(Url :any,data:any): Observable<any> {
      return this.httpClient.post(Url,data);
    }
  
    searchByName(name: any): Observable<any> {
      return this.httpClient.get(`${baseURL}?name=${name}`);
    }
  }

