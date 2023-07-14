import { Component, Input } from '@angular/core';
import { JobPostService } from '../services/job-post.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-dialog-posthistory',
  templateUrl: './dialog-posthistory.component.html',
  styleUrls: ['./dialog-posthistory.component.css']
})
export class DialogPosthistoryComponent {
@Input() data:any
  constructor(private jobPost:JobPostService, public dash:DashboardComponent){}
jobDetails:any=[];
  ngOnInit(){
    this.jobPost.getData().subscribe((response)=>{
    this.jobDetails=response
    this.dash.details
    })
  }
}
