import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './IUser'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = 'http://localhost:8000/api/'
  httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})}
  constructor(private http: HttpClient) { }

  Login(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this._url + 'login/', user, this.httpHeaders)
  }

  SignUp(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this._url + 'register/', user, this.httpHeaders)
  }

  
}
