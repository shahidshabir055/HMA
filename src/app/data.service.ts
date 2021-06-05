import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {Client } from './client.type';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private serviceUrl = 'http://hmaapi.kilobytetech.com/users?pageNo=1&size=20';

  constructor( private http: HttpClient ) { }

  fetchPosts(): Observable<Client[]> {
    // tslint:disable-next-line:ban-types
    return this.http.get<Object[]>(this.serviceUrl).pipe(
      map(data => data.map(o => this.toClient(o) ))
    );
  }

  private toClient(obj: any): Client {
    console.log(obj);
    return {
    Id: obj.Id,
    name: obj.name,
    creationDate: obj.creationDate,
    assignedMember: obj.assignedMember
    };
  }
}
