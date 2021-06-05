import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get( 'http://hmaapi.kilobytetech.com/users?pageNo=1&size=20', { responseType: 'text' });
  }

  getDocumentById(): Observable<any> {
    return this.http.get('http://hmaapi.kilobytetech.com/documents?' + 'companyId',  { responseType: 'text' });
  }
}
