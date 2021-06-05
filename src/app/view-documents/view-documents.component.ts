import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-documents',
  templateUrl: './view-documents.component.html',
  styleUrls: ['./view-documents.component.css']
})
export class ViewDocumentsComponent implements OnInit {
  id = 1;
  url = 'http://hmaapi.kilobytetech.com/documents?clientId=5f60e62502392e786fa4ae95&financialYear=2020-2021';
  // url = 'http://hmaapi.kilobytetech.com/users?pageNo=1&size=20';
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getPostById();
  }
  getPostById(): void {
    // let endPoints = "/posts/" + this.id;
    this.httpClient.get(this.url).subscribe(data => {
      console.log(data);
    });
  }

}
