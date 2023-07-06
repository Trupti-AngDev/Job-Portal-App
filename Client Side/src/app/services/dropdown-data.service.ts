import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownDataService {

  constructor(private http: HttpClient) { }

  getCountries():Observable<any>{
    return this.http.get('http://localhost:4000/api/countries');
  }
  
  getStates(_event: string):Observable<any>{
    return this.http.get(`http://localhost:4000/api/states?country_short_name=${_event}`) ;
  }
 
  getCities(_event: string){
    return this.http.get(`http://localhost:4000/api/cities?state_short_name=${_event}`);
    }
}
















