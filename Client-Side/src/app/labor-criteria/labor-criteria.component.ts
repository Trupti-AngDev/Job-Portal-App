import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labor-criteria',
  templateUrl: './labor-criteria.component.html',
  styleUrls: ['./labor-criteria.component.css']
})
export class LaborCriteriaComponent {

  constructor( private router:Router){}

selectedCriteria:any;

  movetohomepage(){
  this.router.navigate(['/homepage'])
  }
  movetodomain(){
    if(this.selectedCriteria=="Skilled Labor"){
      this.router.navigate(['/skilledLabor'])
   }
    if(this.selectedCriteria=="Professional Labor"){
   this.router.navigate(['/professional-labor'])
   }
  }
}
