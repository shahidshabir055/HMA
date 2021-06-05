import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataReadService {

  constructor(private http: HttpClient) { }
  sendData(data: any): Observable<any> {
    // tslint:disable-next-line:whitespace
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    return <Observable<any>> this.http.post('http://hmaapi.kilobytetech.com/auth/login', data);
  }
}
