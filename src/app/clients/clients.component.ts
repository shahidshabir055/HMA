import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {DataService} from '../data.service';
import { Client } from '../client.type';
export interface PeriodicElement {
  Id: string;
  name: string;
  creationDate: Date;
  assignedMember: string;
}
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'name'];
  dataSource!: MatTableDataSource<Client>;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchPosts().subscribe(clients => {
       this.dataSource = new MatTableDataSource(clients);
       console.log(this.dataSource);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
