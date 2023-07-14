import { Component } from '@angular/core';
import { JobPostService } from '../services/job-post.service';
import { response } from 'express';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
jobPosts:any=[];
constructor(private jobPost:JobPostService){}

ngOnInit(){
 this.jobPost.getData().subscribe((response)=>{
 // console.log(response);
  this.jobPosts=response;
 console.log(response);
 })
}
postDetails(){
  alert('hi');
}
}
