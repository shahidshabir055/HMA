import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://hmaapi.kilobytetech.com/auth/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: any; }): Observable<any> {
    return this.http.post(AUTH_API, {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }
}
