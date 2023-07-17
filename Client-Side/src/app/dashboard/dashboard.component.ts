import { Component, Injectable } from '@angular/core';
import { JobPostService } from '../services/job-post.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogPostComponent } from '../dialog-post/dialog-post.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html', 
  styleUrls: ['./dashboard.component.css']
})

@Injectable({
  providedIn:'root'
})
export class DashboardComponent {
jobPosts:any=[];
specificData:any;
constructor(private jobPost:JobPostService, private router:Router, private   dialog: MatDialog){}

ngOnInit(){
 this.jobPost.getData().subscribe((response)=>{

 // console.log(response);
  this.jobPosts=response;
 //console.log(response);
 })
}

details(id: any): void {
  this.specificData = this.jobPosts.find((item: any) => item.id === id);

  if (this.specificData) {
    const dialogRef = this.dialog.open(DialogPostComponent, {
      width: '400px',
      data: {
        companyName: this.specificData.companyname,
        position: this.specificData.position,
        jd:this.specificData.jd
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result:', result);
      // Handle the result or perform any necessary actions
    });
  }
}

}

