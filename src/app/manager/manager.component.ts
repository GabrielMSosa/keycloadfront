import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/enviroment/enviroment';
 
export const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  })
};
@Component({
  selector: 'app-manager',
  template: '<p>{{ message }}</p>',
  styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent implements OnInit {
  message = 'message';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${environment.serverUrl}/api/manager`,HTTP_OPTIONS).subscribe((data: any) => {
      this.message = data.message;
    });
  }
}
