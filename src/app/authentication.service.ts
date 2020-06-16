import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders , HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService  {
  
  myAuthToken;
  Data;
  constructor(
    public http: HttpClient,

    private router: Router

  ) { }

  createUser(userInfo): Observable<any>{
    return this.http.post<any>("http://localhost:3000/users/create", { user: userInfo })
    // let params = new HttpParams().set('key', value).set('key', value);
    // return this.http.get<any>("http://localhost:3000/users/", { params })
  }

  assign(item1, item2) : Observable<any>{
    let params = new HttpParams().set('card_id' , item1.id).set('user_id' , item2.id);
    return this.http.post<any>("http://localhost:3000/card/assign"  , { card_id: item1.id , user_id: item2.id  }) ; 
  }

  generate() : Observable<any>
  {
    return this.http.get<any>("http://localhost:3000/mail/retrieve");
  }

  getJWT(userInfo): Observable<any>
  {
    console.log(userInfo);
    return this.http.post<any>("http://localhost:3000/user_token" , {auth : userInfo} );     
  }
  getUsers() : Observable<any>
  {
    return this.http.get<any>("http://localhost:3000/users/get_all");
  }

  admin_login() : Observable<any>
  {
    return this.http.get<any>("http://localhost:3000/users/admin_login");
  }

  getMails() : Observable<any>
  {
    return this.http.get<any>("http://localhost:3000/users") ;
  }

  getMailsAssigned():Observable<any>
  {
    return this.http.get<any>("http://localhost:3000/card/assigned") ;
  }

  unassign(card) : Observable<any>
  {
    return this.http.post<any>("http://localhost:3000/card/unassign" , {card_id: card.id } )
  }

}
