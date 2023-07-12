import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labor-criteria',
  templateUrl: './labor-criteria.component.html',
  styleUrls: ['./labor-criteria.component.css']
})
export class LaborCriteriaComponent {

  constructor( private router:Router){}

  movetohomepage(){
  this.router.navigate(['/homepage'])
  }
}
