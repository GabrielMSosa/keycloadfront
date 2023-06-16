import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
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
  selector: 'app-admin',
  template: '<p>{{ message }}</p>',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  message = 'message';
  user="user";
  constructor(private http: HttpClient,private keycloakService: KeycloakService) {}

  ngOnInit(): void {
    this.http.get(`${environment.serverUrl}/api/demo`,HTTP_OPTIONS).subscribe((data: any) => {
      this.message = data.message;
      sessionStorage.setItem('userid',this.message);
      this.user = this.keycloakService.getUsername();
      console.log(this.user)
    });
  }
}
