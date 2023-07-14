import { Component, Injectable } from '@angular/core';
import { JobPostService } from '../services/job-post.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogPosthistoryComponent } from '../dialog-posthistory/dialog-posthistory.component';


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
constructor(private jobPost:JobPostService, private router:Router, public dialog: MatDialog){}

ngOnInit(){
 this.jobPost.getData().subscribe((response)=>{

 // console.log(response);
  this.jobPosts=response;
 //console.log(response);
 })
}

details(id:any){
 // console.log(id);
  
    this.specificData = this.jobPosts.find((item:any) => item.id === id);
   // console.log(specificData)
    if (this.specificData) {
      // Use the specificData properties
      console.log(this.specificData.companyname);
      console.log(this.specificData.position);
      // ...
    }
  
  const dialogRef = this.dialog.open(DialogPosthistoryComponent, {
    width: '400px', 
});
dialogRef.afterClosed().subscribe((result) => {
  console.log('Dialog result:', result);
  // Handle the result or perform any necessary actions
});

}
}
