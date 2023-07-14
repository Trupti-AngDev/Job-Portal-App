import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobPostService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('http://localhost:5000/job-posts');
  }
  
  getPostData(data:any):Observable<any>{
  
   return this.http.post('http://localhost:5000/job-posts',data)
  }

}

