import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skilled-labour-domain',
  templateUrl: './skilled-labour-domain.component.html',
  styleUrls: ['./skilled-labour-domain.component.css']
})
export class SkilledLabourDomainComponent {
constructor(private router:Router){}
  movetolaborcriteria(){
  this.router.navigate(['/laborcriteria'])
  }
  movetojobpost(){
 this.router.navigate(['/post-job'])
  }
}

