import { Injectable } from '@angular/core';
import 'jwt-decode';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {

  }
  public getToken(): string 
  {
    return localStorage.getItem('jwt');
  }

  sampleAuth(jwt): Observable<any> {
    return this.http.post<any>('url', {jwt: jwt});
  }

}
