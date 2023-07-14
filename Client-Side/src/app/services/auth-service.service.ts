import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http:HttpClient) { }
  login(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/user/sign-in',data)
  }
  signup(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/user/register',data)
  }
  forget(data:any):Observable<any>{
    return this.http.post('http://localhost:9002/auth/forget',data)
  }
//   Google():Observable<any>{
//     return this.http.get('http://localhost:3000/user/auth-google')
//   }
 }
