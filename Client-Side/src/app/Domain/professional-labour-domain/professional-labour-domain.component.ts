import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-labour-domain',
  templateUrl: './professional-labour-domain.component.html',
  styleUrls: ['./professional-labour-domain.component.css']
})
export class ProfessionalLabourDomainComponent {
  constructor(private router:Router){}
  movetolaborcriteria(){
this.router.navigate(['/laborcriteria'])
  }
  movetojobpost(){
this.router.navigate(['/post-job'])
  }
}
