import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobPostComponent } from '../job-post/job-post.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor( private router:Router){}

  moveToJobPost(){
  this.router.navigate(['/laborcriteria'])
  }
}
